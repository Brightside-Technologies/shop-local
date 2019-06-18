import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";
import PublicLayout from "../containers/PublicLayout";
import Login from "../components/Login/index";
import { useAuthenticationContext } from "../components/AuthenticationProvider";

const styles = theme => ({
    root: {
        height: "100%",
        padding: "0.5rem"
    },
    gridItem: {
        margin: "0.5rem 0 0.5rem 0"
    },
    logo: {
        width: 300,
        [theme.breakpoints.down("sm")]: {
            width: 200
        }
    },
    appName: {
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.h5.fontSize
        }
    }
});

function LoginPage(props) {
    const { token } = useAuthenticationContext();
    const { classes } = props;

    if (token) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <PublicLayout>
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="center">
                <Grid
                    className={classes.gridItem}
                    item
                    container
                    justify="center">
                    <Grid item>
                        <img
                            className={classes.logo}
                            alt="Patient Care Analytics"
                            src={Logo}
                        />
                    </Grid>
                </Grid>
                <Grid className={classes.gridItem} item>
                    <Typography align="center" variant="h6">
                        Welcome to
                    </Typography>
                    <Typography
                        className={classes.appName}
                        align="center"
                        variant="h4">
                        Labor Management Portal
                    </Typography>
                </Grid>
                <Grid className={classes.gridItem} item>
                    <Login />
                </Grid>
                <Grid
                    className={classes.gridItem}
                    item
                    container
                    justify="center">
                    <Grid item>
                        <Button component={Link} to="/forgot-password">
                            Forgot Password
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </PublicLayout>
    );
}

export default withStyles(styles)(LoginPage);
