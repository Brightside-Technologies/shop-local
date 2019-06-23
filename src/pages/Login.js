import React from "react";
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

function LoginPage({ classes, history, ...rest }) {
    //     if (userIsLoggedIn) {
    //         return <Redirect to="/home" />;
    // }
    async function handleSubmit(data, formikProps) {
        const { email, password } = data;
        const { setSubmitting } = formikProps;
        try {
            const response = await auth.signInWithEmailAndPassword({
                email,
                password
            });
            console.log("RESPONSE", response);
            setSubmitting(false);
            history.push("/home");
        } catch (error) {
            setSubmitting(false);
            console.log("ERROR", error);
        }
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
