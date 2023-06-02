import { Box } from '@mui/material';
import { changeLanguage } from 'i18next';

const ProfilePage = () => {
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
            <div onClick={() => changeLanguage("fa")}>sss</div>
        </Box >
    );
}

export default ProfilePage;