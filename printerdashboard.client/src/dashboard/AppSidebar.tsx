import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, MenuItemStyles } from 'react-pro-sidebar';
import BarChartIcon from '@mui/icons-material/BarChart';

const themes = {
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
        },
        menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            hover: {
                backgroundColor: '#00458b',
                color: '#b6c8d9',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};

/*********************************************************/
/* MAIN - SIDEBAR */
/*********************************************************/
function AppSidebar() {
    const [collapsed, setCollapsed] = React.useState(false);
    const [toggled, setToggled] = React.useState(false);

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes.dark.menu.icon,
            // Assuming menuClasses.disabled is defined/imported elsewhere
            [`&.${menuClasses.disabled}`]: {
                color: themes.dark.menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        // If you don't need dynamic styling based on sub-menu level, simply return the background color.
        subMenuContent: () => ({
            backgroundColor: themes.dark.menu.menuContent,
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: themes.dark.menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: themes.dark.menu.hover.backgroundColor,
                color: themes.dark.menu.hover.color,
            },
        },
        // If you don't require a dynamic weight, you can set it directly.
        label: () => ({
            fontWeight: 600,
        }),
    };


}