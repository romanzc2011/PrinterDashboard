/* eslint-disable @typescript-eslint/no-unused-vars */
import AppSidebar from "./dashboard/AppSidebar";
import { useState } from 'react';
import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { darkTheme } from "./themes";

export const App = () => {
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundColor: (theme: Theme) => {
                        return theme.palette.background.default;
                    },
                    minHeight: "100vh", // ensures the background covers the full viewport height
                }}
            >
                <AppSidebar />
            </Box>
        </ThemeProvider>
    );
}
