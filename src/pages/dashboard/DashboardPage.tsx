import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Timer from '../../components/Timer';
import { getStorage } from '../../utils/storage';

const hours = new Date().getHours()

const DashboardPage = () => {

    const welocmeTextHandler = () => {
        let welcomeText = ''
        if (4 < hours && hours < 12) {
            welcomeText = "Good Morning"
        } else if (12 < hours && hours < 15) {
            welcomeText = "Good Afternoon"
        } else if (15 < hours && hours < 20) {
            welcomeText = "Good Evening"
        } else if (20 < hours && hours < 4) {
            welcomeText = "Good Night"
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
                <span>{getStorage("USER") || "User"}</span>
            </Typography>
        </Box>
    );
}

export default DashboardPage;