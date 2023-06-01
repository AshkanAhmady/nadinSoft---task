import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Typography variant="h6" component="div" sx={{ padding: ".5rem", display: "flex", flexGrow: 1, justifyContent: "center" }}>
                    App bar
                </Typography>
            </AppBar>
        </Box>
    );
};

export default Header;