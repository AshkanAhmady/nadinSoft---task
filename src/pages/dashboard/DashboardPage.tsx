import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Timer from '../../components/Timer';

const DashboardPage = () => {

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
                Good morning, user
            </Typography>
        </Box>
    );
}

export default DashboardPage;