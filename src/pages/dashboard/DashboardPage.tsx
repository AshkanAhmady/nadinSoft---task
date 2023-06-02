import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Timer from '../../components/timer/Timer';
import useWelcomeText from '../../hooks/WelcomeText';
import { getStorage } from '../../utils/storage';
import { useTheme } from '@mui/material/styles';

const DashboardPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: "3rem",
                flexDirection: 'column',
                minHeight: '100%',
                // bgcolor: 'background.paper',
                position: "relative",

                // background: `${theme.palette.mode === "dark" ? "#3C3C3C" : "nuset"}`
            }}
        >
            <Typography variant="h3">
                <Timer />
                <span>{useWelcomeText()}, </span>
                <span>{getStorage("USER") || t("User")}</span>
            </Typography>
        </Box>
    );
}

export default DashboardPage;