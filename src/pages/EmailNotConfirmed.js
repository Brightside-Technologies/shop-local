import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
                        You're email hasn't been confirmed. Please check your
                        email for a confirmation link.
                    </Typography>
                    <Button>Re-send confirmation link</Button>
                </Grid>
            </Grid>
        </PublicLayout>
    );
}

export default withStyles(styles)(ConfirmationLinkSent);
