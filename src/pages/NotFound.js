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

function NotFound(props) {
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
                        Not Found
                    </Typography>
                </Grid>
            </Grid>
        </PublicLayout>
    );
}

export default withStyles(styles)(NotFound);
