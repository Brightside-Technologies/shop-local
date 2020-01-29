import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PublicLayout from "../containers/PublicLayout";

const styles = () => ({
    root: {
        height: "100%"
    }
});

function ConfirmationLinkSent(props) {
    const { classes } = props;
    return (
        <PublicLayout>
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="center">
                <Grid item>
                    <Typography align="center" variant="h4">
                        Confirmation Link Sent. Please check your email.
                    </Typography>
                </Grid>
            </Grid>
        </PublicLayout>
    );
}

export default withStyles(styles)(ConfirmationLinkSent);
