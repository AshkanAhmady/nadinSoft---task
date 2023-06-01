import { Link } from "react-router-dom"
import { Box, Button, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: "1rem",
                flexDirection: 'column',
                minHeight: '100%',
            }}
        >
            <Typography variant="h1">
                404
            </Typography>
            <Typography variant="h6">
                The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
                <Button variant="contained">
                    Back Home
                </Button>
            </Link>
        </Box>
    );
};

export default NotFound;