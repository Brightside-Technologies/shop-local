import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, Icon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = theme => ({
    appBar: {
        width: "100vw",
        zIndex: theme.zIndex.drawer + 1
    },
    toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    grow: {
        flexGrow: 1
    },
    filterIcon: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        },
        color: "#fff"
    },
    selectors: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
});

function MenuAppBar(props) {
    const { isDrawerOpen, toggleDrawer, classes } = props;
    return (
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    onClick={() => toggleDrawer(!isDrawerOpen)}>
                    {(!isDrawerOpen && <MenuIcon />) || <ArrowBackIcon />}
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Shop Local
                </Typography>
                <div className={classes.grow} />
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(MenuAppBar);
