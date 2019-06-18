import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PublicLayout from "../containers/PublicLayout";

const styles = theme => ({
    root: {
        animationName: "fadeIn",
        animationDuration: "500ms",
        height: "100%"
    },
    fadeOut: {
        animationName: "fadeIn",
        animationDuration: "500ms"
    },

    logo: {
        width: 300,
        [theme.breakpoints.down("sm")]: {
            width: 200
        }
    },
    "@keyframes fadeIn": {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    "@keyframes fadeOut": {
        from: {
            opacity: 1
        },
        to: {
            opacity: 0
        }
    }
});

function Loading(props) {
    const { classes } = props;
    return (
        <PublicLayout>
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="center">
                <Grid item container justify="center">
                    <Grid item>Loading...</Grid>
                </Grid>
            </Grid>
        </PublicLayout>
    );
}

export default withStyles(styles)(Loading);
