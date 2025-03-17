/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext, useState, FunctionComponent } from "react";
import BKSeal from "../assets/seal_no_border.png";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import HomeIcon from '@mui/icons-material/Home';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import { darkTheme } from "../themes";
import { SvgIconProps } from "@mui/material/SvgIcon";
import Icon from "@mui/icons-material/icon";
import { SidebarHeader } from "../components/SidebarHeader";

interface ItemProps {
    title: string;
    to: string;
    icon: React.ComponentType<SvgIconProps>;
    selected: string;
    setSelected: (value: string) => void;
}

const AppSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${darkTheme.palette.secondary.main} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                    color: darkTheme.palette.secondary.main + " !important", // set desired text color
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
                "& .pro-sub-menu-content": {
                    backgroundColor: darkTheme.palette.secondary.main + " !important",
                },
                "& .pro-submenu-item": {
                    color: "lightgray !important"
                }
            }}
        >
            <Box style={{ display: 'flex', height: '100vh' }}>
                <Sidebar
                    collapsed={isCollapsed}
                    toggled={toggled}
                    onBackdropClick={() => setToggled(false)}
                    breakPoint="md"
                    backgroundColor={darkTheme.palette.secondary.main}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Menu
                            menuItemStyles={{
                                button: {
                                    backgroundColor: darkTheme.palette.secondary.main,
                                    '&:hover': {
                                        backgroundColor: 'green'
                                    }
                                },
                                SubMenuExpandIcon: {
                                    color: darkTheme.palette.primary.main,
                                }

                            }}
                        >
                            <MenuItem
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}

                            >
                                {!isCollapsed && (
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        ml="15px"
                                    >
                                        <Typography variant="h4">
                                            Printer Dashboard
                                        </Typography>
                                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </MenuItem>

                            {!isCollapsed && (
                                <Box mb="25px">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <img
                                            src={BKSeal}
                                            style={{ width: "100px", height: "100px" }}
                                        />
                                    </Box>
                                </Box>
                            )}

                            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                                {/*************************************************************************/}
                                {/* DASHBOARD */}
                                {/*************************************************************************/}
                                <MenuItem
                                    style={{
                                        color: darkTheme.palette.info.main
                                    }}
                                    icon={<HomeIcon />}
                                ><Typography>Dashboard</Typography></MenuItem>

                                {/*************************************************************************/}
                                {/* CHARTS */}
                                {/*************************************************************************/}
                                <SubMenu
                                    label="Charts"
                                    icon={<BarChartOutlinedIcon />}
                                >
                                    <MenuItem> Pie charts</MenuItem>
                                    <MenuItem> Line charts</MenuItem>
                                    <MenuItem> Bar charts</MenuItem>
                                </SubMenu>

                                {/*************************************************************************/}
                                {/* DATA TABLES */}
                                {/*************************************************************************/}
                                <SubMenu
                                    label="Data Tables"
                                    icon={<FolderSharpIcon />}
                                >
                                    <MenuItem>Printer Data</MenuItem>
                                </SubMenu>
                            </Box>
                        </Menu>
                    </div>
                </Sidebar>

            </Box>
        </Box>
    )
}

export default AppSidebar;