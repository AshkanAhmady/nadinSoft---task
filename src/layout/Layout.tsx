import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import CloudIcon from '@mui/icons-material/Cloud';
import { ChildsComponentsType } from "../types";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import styles from "./Layout.module.css"
import { useTranslation } from "react-i18next";
import { getStorage } from "../utils/storage";

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    const { t } = useTranslation()

    return (
        <Box height="100vh" sx={{ display: "flex", flexDirection: "column", direction: `${window.localStorage.i18nextLng === "fa" ? "rtl" : "ltr"}` }}>
            <Header />
            <Grid sx={{ display: "flex", flexGrow: 1 }} container>
                <Grid boxShadow="0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);" item xs={2}>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? styles.activeNavLink : styles.navLink)} to="/">
                                    <ListItem className={styles.listItem} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DashboardIcon />
                                            </ListItemIcon>
                                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Dashboard")} />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? styles.activeNavLink : styles.navLink)} to="/todos">
                                    <ListItem className={styles.listItem} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ListIcon />
                                            </ListItemIcon>
                                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Todos")} />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? styles.activeNavLink : styles.navLink)} to="weather">
                                    <ListItem className={styles.listItem} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CloudIcon />
                                            </ListItemIcon>
                                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Weather")} />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                    (isActive ? styles.activeNavLink : styles.navLink)} to="profile">
                                    <ListItem className={styles.listItem} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <PersonIcon />
                                            </ListItemIcon>
                                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Profile")} />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item xs={10}>{children}</Grid>
            </Grid>
        </Box>
    );
};

export default Layout;