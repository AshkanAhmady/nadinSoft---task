import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation()
    return (
        <Box>
            <AppBar position="static">
                <Typography variant="h6" component="div" sx={{ padding: ".5rem", display: "flex", flexGrow: 1, justifyContent: "center" }}>
                    {t("AppBar")}
                </Typography>
            </AppBar>
        </Box>
    );
};

export default Header;