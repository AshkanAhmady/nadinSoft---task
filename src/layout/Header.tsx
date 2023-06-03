import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import DehazeIcon from '@mui/icons-material/Dehaze';
import styles from "./Header.module.css"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import CloudIcon from '@mui/icons-material/Cloud';
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';


export default function Header() {
    const direction = window.localStorage.i18nextLng === "fa" ? "right" : "left"
    const { t } = useTranslation()
    const theme = useTheme();
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (anchor: string, open: boolean) => {
        setState({ ...state, [anchor]: open });
    }


    const list = (anchor: string) => (
        <Box
            role="presentation"
            onClick={() => toggleDrawer(anchor, false)}
            onKeyDown={() => toggleDrawer(anchor, false)}
        >
            <List>
                <NavLink style={{ textDecoration: "none", color: `${theme.palette.mode === "dark" ? "white" : "black"}` }} className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)} to="/">
                    <ListItem className={styles.listItem} disablePadding>
                        <ListItemButton>
                            <ListItemIcon style={{ minWidth: "0", padding: `${window.localStorage.i18nextLng === "fa" ? "0 0 0 .5rem" : "0 .5rem 0 0"}` }}>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Dashboard")} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: `${theme.palette.mode === "dark" ? "white" : "black"}` }} className={({ isActive }) =>
                    (isActive ? styles.activeNavLink : styles.navLink)} to="/todos">
                    <ListItem className={styles.listItem} disablePadding>
                        <ListItemButton>
                            <ListItemIcon style={{ minWidth: "0", padding: `${window.localStorage.i18nextLng === "fa" ? "0 0 0 .5rem" : "0 .5rem 0 0"}` }}>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Todos")} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: `${theme.palette.mode === "dark" ? "white" : "black"}` }} className={({ isActive }) =>
                    (isActive ? styles.activeNavLink : styles.navLink)} to="weather">
                    <ListItem className={styles.listItem} disablePadding>
                        <ListItemButton>
                            <ListItemIcon style={{ minWidth: "0", padding: `${window.localStorage.i18nextLng === "fa" ? "0 0 0 .5rem" : "0 .5rem 0 0"}` }}>
                                <CloudIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Weather")} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: `${theme.palette.mode === "dark" ? "white" : "black"}` }} className={({ isActive }) =>
                    (isActive ? styles.activeNavLink : styles.navLink)} to="profile">
                    <ListItem className={styles.listItem} disablePadding>
                        <ListItemButton>
                            <ListItemIcon style={{ minWidth: "0", padding: `${window.localStorage.i18nextLng === "fa" ? "0 0 0 .5rem" : "0 .5rem 0 0"}` }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: `${window.localStorage.i18nextLng === "fa" ? "right" : "left"}` }} primary={t("Profile")} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="relative">
                <DehazeIcon onClick={() => toggleDrawer(direction, true)} className={`${styles.dehazeIcon} ${window.localStorage.i18nextLng === "fa" ? styles.faDehazeIcon : ""}`} />
                <Drawer
                    sx={{ direction: `${window.localStorage.i18nextLng === "fa" ? "rtl" : "ltr"}` }}
                    anchor={direction}
                    open={state[direction]}
                    onClose={() => toggleDrawer(direction, false)}
                >
                    {list(direction)}
                </Drawer>
                <Typography variant="h6" component="div" padding=".5rem" sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
                    {t("AppBar")}
                </Typography>
            </AppBar>
        </Box>
    );
}
