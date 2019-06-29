import React from "react";
import to from "await-to-js";
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
import SignUpForm from "../components/SignUpForm";
import { SIGNUP_VALIDATION_SCHEMA } from "../constants/schemaValidations";
import Auth from "../api/auth.api";
import User from "../api/user.api";

const auth = new Auth();
const user = new User();

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

function SignUpPage({ classes }) {
    async function handleSubmit(data, formikProps) {
        let err;
        let signUpResponse;
        let updateDisplayNameResponse;
        let createFaunaUserResponse;

        const { firstName, lastName, email, password } = data;
        const { setSubmitting } = formikProps;

        [err, signUpResponse] = await to(
            auth.signUpWithEmailAndPassword({
                email,
                password
            })
        );
        console.log("signUpResponse", signUpResponse);
        if (err) throw new Error(err);

        [err, updateDisplayNameResponse] = await to(
            user.updateFirebaseDisplayName(`${firstName} ${lastName}`)
        );
        if (err) throw new Error(err);

        [err, createFaunaUserResponse] = await to(
            user.create({
                firstName,
                lastName,
                email
            })
        );
        console.log("createFaunaUserResponse", createFaunaUserResponse);
        if (err) throw new Error(err);

        setSubmitting(false);
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
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
                                    Sign up
                                </Typography>
                            </div>

                            <Formik
                                onSubmit={handleSubmit}
                                validateOnBlur
                                render={props => <SignUpForm {...props} />}
                                initialValues={initialValues}
                                validationSchema={SIGNUP_VALIDATION_SCHEMA}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </RootGrid>
        </PublicLayout>
    );
}

export default withStyles(styles)(SignUpPage);
