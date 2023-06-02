import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Timer from '../../components/timer/Timer';
import { getStorage } from '../../utils/storage';


const hours = new Date().getHours()

const DashboardPage = () => {
    const { t } = useTranslation();


    const welocmeTextHandler = () => {
        let welcomeText = ''
        if (4 < hours && hours <= 12) {
            welcomeText = t("GoodMorning")
        } else if (13 < hours && hours <= 15) {
            welcomeText = t("GoodAfternoon")
        } else if (16 < hours && hours <= 20) {
            welcomeText = t("GoodEvening")
        } else {
            welcomeText = t("GoodNight")
        }

        return welcomeText
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: "3rem",
                flexDirection: 'column',
                minHeight: '100%',
            }}
        >
            <Typography variant="h3">
                <Timer />
                <span>{welocmeTextHandler()}, </span>
                <span>{getStorage("USER") || t("User")}</span>
            </Typography>
        </Box>
    );
}

export default DashboardPage;