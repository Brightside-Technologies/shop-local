import React from "react";
import to from "await-to-js";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { styled } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import PublicLayout from "../containers/PublicLayout";
import LoginForm from "../components/LoginForm";
import { LOGIN_VALIDATION_SCHEMA } from "../constants/schemaValidations";
import Auth from "../api/auth.api";
import { useUserContext } from "../components/UserProvider";

const auth = new Auth();

const RootGrid = styled(Grid)({
    height: "100%"
});

const styles = theme => ({
    cardHeader: {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    }
});

function LoginPage({ classes, history }) {
    console.log("LOGIN");
    const userContext = useUserContext();
    const { user, isUserInitialized } = userContext;

    if (isUserInitialized && user) {
        return <Redirect to="/home" />;
    }

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
            <RootGrid container justify="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
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
                        </CardContent>
                    </Card>
                </Grid>
            </RootGrid>
        </PublicLayout>
    );
}

export default withStyles(styles)(LoginPage);
