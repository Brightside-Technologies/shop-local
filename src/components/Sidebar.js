import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import classNames from "classnames";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import { useTheme } from "@material-ui/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import SidebarLink from "./SidebarLink";
import Auth from "../api/auth.api";

const authApi = new Auth();

const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 40,
        [theme.breakpoints.down("sm")]: {
            width: drawerWidth
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
        // [theme.breakpoints.down("md")]: {
        //     display: "none"
        // }
    },
    // sidebarList: {
    //     [theme.breakpoints.up("md")]: {
    //         marginTop: theme.spacing.unit * 6
    //     }
    // },
    mobileBackButton: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
});

function Sidebar({ classes, isOpen, toggleDrawer, location }) {
    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

    function onSignOut() {
        authApi.signOut();
    }

    const structure = [
        { id: 0, label: "Home", link: "/home", icon: <HomeIcon /> },
        {
            id: 1,
            label: "Profile",
            link: "/profile",
            icon: <ProfileIcon />
        },

        { id: 2, type: "divider" },
        {
            id: 3,
            label: "Logout",
            onClick: () => onSignOut(),
            icon: <LogoutIcon />
        }
        // {
        //     id: 9,
        //     label: "UI Elements",
        //     link: "/app/ui",
        //     icon: <HomeIcon />,
        //     children: [
        //         { label: "Icons", link: "/app/ui/icons", icon: <HomeIcon /> },
        //         { label: "Charts", link: "/app/ui/charts", icon: <HomeIcon /> },
        //         { label: "Maps", link: "/app/ui/maps", icon: <HomeIcon /> }
        //     ]
        // }
        // { id: 5, type: 'divider' },
        // { id: 6, type: 'title', label: 'HELP' },
        // { id: 7, label: 'Library', link: '', icon: <LibraryIcon /> },
        // { id: 8, label: 'Support', link: '', icon: <SupportIcon /> },
        // { id: 9, label: 'FAQ', link: '', icon: <FAQIcon />},
        // { id: 10, type: 'divider' },
        // { id: 11, type: 'title', label: 'PROJECTS' },
        // { id: 12, label: 'My recent', link: '', icon: <Dot size="large" color="warning" /> },
        // { id: 13, label: 'Starred', link: '', icon: <Dot size="large" color="primary" /> },
        // { id: 14, label: 'Background', link: '', icon: <Dot size="large" color="secondary" /> },
    ];
    return (
        <Drawer
            variant={isScreenSmall ? "temporary" : "permanent"}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen
                })
            }}
            open={isOpen}>
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleDrawer(!isOpen)}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <Typography align="center" noWrap variant="h6" gutterBottom>
                {`User`}
            </Typography>
            <List className={classes.sidebarList}>
                {structure.map(link => (
                    <SidebarLink
                        key={link.id}
                        location={location}
                        isSidebarOpened={isOpen}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    );
}

export default withRouter(withStyles(styles)(Sidebar));
