import { Box } from '@mui/material';
import { changeLanguage } from 'i18next';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { ProfileSelectType } from '../../types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setStorage } from '../../utils/storage';
import { toast } from 'react-hot-toast';
import { ColorModeContext } from '../../context/ThemeContext';
import { useTheme } from '@mui/material/styles';

const ProfilePage = () => {
    const [name, setName] = useState("")
    const { setMode } = useContext(ColorModeContext);

    const [selectedThemeOption, setSelectedThemeOption] = useState<ProfileSelectType | null>(null)
    const [selectedLangOption, setSelectedLangOption] = useState<ProfileSelectType | null>(null)
    const { t } = useTranslation()
    const themeOptions = [
        { value: "dark", label: t("Dark") },
        { value: "light", label: t("Light") }
    ]
    const langOptions = [
        { value: "fa", label: t("Persian") },
        { value: "en", label: t("English") }
    ]

    const langHandleChange = (selectedOption: ProfileSelectType | null) => {
        setSelectedLangOption(selectedOption)
    };

    const ThemehandleChange = (selectedOption: ProfileSelectType | null) => {
        setSelectedThemeOption(selectedOption)
    };

    const handleSaveChanges = () => {
        if (name) {
            setStorage("USER", name)
            toast.success(t("YourNameRegistered"))
            setName("")
        }
        if (selectedLangOption?.value) {
            changeLanguage(selectedLangOption?.value)
            toast.success(t("LangChanged"))
            setSelectedLangOption(null)
        }
        if (selectedThemeOption?.value) {
            setMode(selectedThemeOption?.value)
            localStorage.setItem("theme", selectedThemeOption?.value)
            toast.success(t("ThemeChanged"))
            setSelectedThemeOption(null)
        }

    }

    return (
        <Box
            sx={{
                display: 'flex',
                padding: "2rem",
                alignItems: 'center',
                gap: "1rem",
                flexDirection: 'column',
                minHeight: '100%',
                position: "relative",
            }}

        >
            <TextField value={name} sx={{ width: "300px" }} type="text" onChange={(e) => setName(e.target.value)} id="standard-basic" label={t("Name")} variant="standard" />
            <Select
                placeholder={`${t("Theme")}`}
                className="selector"
                value={selectedThemeOption}
                onChange={ThemehandleChange}
                options={themeOptions}
            />
            <Select
                placeholder={`${t("Locale")}`}
                className="selector"
                value={selectedLangOption}
                onChange={langHandleChange}
                options={langOptions}
            />
            <Button onClick={handleSaveChanges} variant="contained" sx={{ width: "300px" }} type="submit">{t("Save")}</Button>
        </Box >
    );
}

export default ProfilePage;