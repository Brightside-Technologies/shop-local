import React from "react";
import Link from "@material-ui/core/Link";
import to from "await-to-js";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { styled } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import PublicLayout from "../containers/PublicLayout";
import LoginForm from "../components/LoginForm";
import { LOGIN_VALIDATION_SCHEMA } from "../constants/schemaValidations";
import Auth from "../api/auth.api";

const auth = new Auth();

const RootGrid = styled(Grid)({
    height: "100%",
    flexGrow: 1
});

const styles = theme => ({
    cardHeader: {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    }
});

function LoginPage({ classes, history }) {
    async function handleSubmit(data, formikProps) {
        const { email, password } = data;
        const { setSubmitting } = formikProps;

        const [err] = await to(
            auth.signInWithEmailAndPassword({
                email,
                password
            })
        );
        if (err) throw new Error(err);

        history.push("/home");

        setSubmitting(false);
    }

    const initialValues = {
        email: "",
        password: ""
    };

    return (
        <PublicLayout>
            <RootGrid
                spacing={1}
                container
                justify="center"
                alignItems="center">
                <Grid item xs={12} md={6} lg={4} xl={4}>
                    <div className={classes.cardHeader}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                    </div>
                    <Formik
                        onSubmit={handleSubmit}
                        validateOnBlur
                        render={props => <LoginForm {...props} />}
                        initialValues={initialValues}
                        validationSchema={LOGIN_VALIDATION_SCHEMA}
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link href="/" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </RootGrid>
        </PublicLayout>
    );
}

export default withStyles(styles)(LoginPage);
