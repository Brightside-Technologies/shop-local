import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styled } from "@material-ui/styles";

const SubmitButton = styled(Button)({
    margin: "1rem 0"
});

export default class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const { handleSubmit } = this.props;
        handleSubmit(e);
    };

    handleChange = e => {
        const { handleChange } = this.props;
        handleChange(e);
    };

    handleBlur = e => {
        const { handleBlur } = this.props;
        handleBlur(e);
    };

    render() {
        const {
            values: { email, password },
            errors,
            touched,
            isSubmitting,
            isValidating,
            isValid
        } = this.props;

        return (
            <form noValidate onSubmit={this.handleSubmit}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <TextField
                            disabled={isSubmitting}
                            variant="outlined"
                            id="email"
                            name="email"
                            label="Email Address"
                            fullWidth
                            margin="normal"
                            type="email"
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            disabled={isSubmitting}
                            variant="outlined"
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            margin="normal"
                            type="password"
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                            helperText={touched.password ? errors.password : ""}
                            error={touched.password && Boolean(errors.password)}
                            value={password}
                        />
                    </Grid>
                </Grid>
                <SubmitButton
                    size="large"
                    fullWidth
                    disabled={isSubmitting || isValidating || !isValid}
                    type="submit"
                    variant="contained"
                    color="primary">
                    {(isSubmitting && (
                        <CircularProgress size={24} thickness={4} />
                    )) ||
                        "Login"}
                </SubmitButton>
            </form>
        );
    }
}
