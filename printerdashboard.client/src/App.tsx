/* eslint-disable @typescript-eslint/no-unused-vars */
import AppSidebar from "./dashboard/AppSidebar";
import { useState } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

export const App = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <AppSidebar />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
