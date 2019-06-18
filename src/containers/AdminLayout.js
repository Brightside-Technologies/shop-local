import React, { Fragment, useState } from "react";
import { withStyles, CssBaseline } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const styles = theme => ({
    root: {
        display: "flex",
        maxWidth: "100vw",
        overflowX: "hidden",
        height: "100%"
    },
    content: {
        flexGrow: 1
        // padding: theme.spacing.unit * 3
    },
    contentShift: {
        width: `calc(100vw - ${240 + theme.spacing.unit * 6}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    fakeToolbar: {
        ...theme.mixins.toolbar
    }
});

function Layout(props) {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [isFilterDrawerOpen, setFilterDrawerOpen] = useState(false);
    const { children, classes } = props;
    return (
        <Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <Navbar
                    isDrawerOpen={isDrawerOpen}
                    toggleDrawer={setIsDrawerOpen}
                    open={isFilterDrawerOpen}
                    toggleFilterDrawer={setFilterDrawerOpen}
                />
                <Sidebar isOpen={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
                <main className={classes.content}>
                    <div className={classes.fakeToolbar} />
                    {children}
                </main>
            </div>
            {/* <Footer /> */}
        </Fragment>
    );
}

export default withStyles(styles)(Layout);
