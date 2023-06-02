import { createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ChildsComponentsType } from "../types";

export const ColorModeContext = createContext<any>({ mode: "light", undefined })

const ToggleColorMode: React.FC<ChildsComponentsType> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data: any = localStorage.getItem("theme")
            setMode(data || "light")
        }
    }, [])

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ToggleColorMode