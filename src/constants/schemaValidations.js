import * as Yup from "yup";

const SIGNUP_VALIDATION_SCHEMA = Yup.object({
    firstName: Yup.string("Enter your First Name").required(
        "First Name is required"
    ),
    lastName: Yup.string("Enter your Last Name").required(
        "Last Name is required"
    ),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required")
});

export { SIGNUP_VALIDATION_SCHEMA };
