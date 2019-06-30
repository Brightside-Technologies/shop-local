import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import packageJson from "../../package.json";

const styles = () => ({
    root: {
        backgroundColor: "#343a40",
        padding: "15px 15px",
        color: "rgba(255,255,255,.5)"
    },
    text: {
        color: "rgba(255,255,255,.5)"
    },
    textUpperCase: {
        textTransform: "uppercase"
    }
});

function Footer(props) {
    const { classes } = props;
    return (
        <footer className={`${classes.root}`}>
            <Grid container spacing={5} justify="flex-end">
                <Grid item>
                    <Typography
                        variant="caption"
                        className={`${classes.textUpperCase} ${classes.text}`}>
                        {`${
                            process.env.REACT_APP_ENV !== "production"
                                ? process.env.REACT_APP_ENV
                                : ""
                        } v${packageJson.version}`}
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}

export default withStyles(styles)(Footer);
