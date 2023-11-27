import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from "./Form.module.scss"
const cx = classNames.bind(styles)

const signUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Firstname is required"),

    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Lastname is required"),

    // phoneNumber: Yup.string()
    //     .required("Phone number is required")
    //     .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Invalid phone number"),

    email: Yup.string().email('Invalid email address').required("Email is required"),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
})

const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordConfirmation: "",
}

const SignUpForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik
                return (
                    <div className={cx("container")}>
                        <h1>Create an account</h1>
                        <p>Enter your detail below</p>
                        <Form>
                            <div className={cx("form-row")}>
                                <Field
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    className={
                                        errors.firstName && touched.firstName
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className={
                                        errors.lastName && touched.lastName
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            {/* <div className={cx("form-row")}>
                                <Field
                                    type="string"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="Enter your phone"
                                    className={
                                        errors.phoneNumber &&
                                        touched.phoneNumber
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="phoneNumber"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div> */}

                            <div className={cx("form-row")}>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className={
                                        errors.email && touched.email
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className={
                                        errors.password && touched.password
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="password"
                                    name="passwordConfirmation"
                                    id="passwordConfirmation"
                                    placeholder="Confirm your password"
                                    className={
                                        errors.passwordConfirmation && touched.passwordConfirmation
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="passwordConfirmation"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <button
                                type="submit"
                                className={
                                    !(dirty && isValid)
                                        ? cx("disabled-btn")
                                        : ""
                                }
                                disabled={!(dirty && isValid)}
                            >
                                Create Account
                            </button>
                            <div className={cx("account-ready")}>
                                <h3 className={cx("account-content")}>
                                    Already have account?
                                </h3>
                                <Link to="/login">
                                    <span
                                        className={cx(
                                            "account-content",
                                            "account-content-link"
                                        )}
                                    >
                                        Log in
                                    </span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default SignUpForm
