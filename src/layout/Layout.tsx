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
import { Link } from "react-router-dom";

const linkStyles = {
    color: "inherit",
    textDecoration: "none"
}

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    return (
        <Box height="100vh" sx={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Grid sx={{ display: "flex", flexGrow: 1 }} container>
                <Grid boxShadow="0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);" item xs={2}>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <Link style={linkStyles} to="/">
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DashboardIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Dashboard" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link style={linkStyles} to="/todos">
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ListIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Todos" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link style={linkStyles} to="weather">
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CloudIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Weather" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link style={linkStyles} to="profile">
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <PersonIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Profile" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <main>{children}</main>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;