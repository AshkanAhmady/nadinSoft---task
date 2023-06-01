import { Box, Grid } from "@mui/material";
import { ChildsComponentsType } from "../types";
import Header from "./Header";

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    return (
        <Box height="100vh" sx={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Grid sx={{ display: "flex", flexGrow: 1 }} container>
                <Grid bgcolor="#EAEAEA" boxShadow="0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);" item xs={2}>
                    <aside>
                        sidebar
                    </aside>
                </Grid>
                <Grid item xs={10}>
                    <main>{children}</main>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;