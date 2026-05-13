import {Form, Formik, ErrorMessage, Field} from "formik";
import './FormPage.css'

export default function FormPage() {
    const handleValidate = (values) => {
        const errors = {};

        for (let key in values) {
            const value = values[key];

            if(value === null || value === undefined || String(value).trim() === "") {
                errors[key] = "This field is required";
            }
        }

        return errors;
    }

    const initialValues = {
        email: "",
        password: "",
        username: "",
        country: "UA",
        checkbox: false
    }

    const handleSubmit = (values) => {
        console.log("Data:", values);
    };

    return (
        <div className="form-register">
            <Formik
                initialValues={initialValues}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {() => {
                    return (
                        <Form>
                            <div className="div-email">
                                <label htmlFor="email">Email</label>
                                <Field
                                    className="foc"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage name="email">
                                    {(message) => <span>{message}</span>}
                                </ErrorMessage>
                            </div>

                            <div className="div-password">
                                <label htmlFor="password">Password</label>
                                <Field
                                    className="foc"
                                    type="password"
                                    name="password"
                                    placeholder="Hasło"
                                />
                                <ErrorMessage name="password">
                                    {(message) => <span>{message}</span>}
                                </ErrorMessage>
                            </div>

                            <div className="div-username">
                                <label htmlFor="username">Name</label>
                                <Field
                                    className="foc"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                                <ErrorMessage name="username">
                                    {(message) => <span>{message}</span>}
                                </ErrorMessage>
                            </div>

                            <div className="div-counry">
                                <label htmlFor="country">Your country</label>
                                <Field
                                    as="select"
                                    name="country"
                                    id="country"
                                >
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                </Field>
                            </div>

                            <div className="license">
                                <Field
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                />
                                <label htmlFor="checkbox">Accept app politic</label>
                            </div>

                            <div className="submit">
                                <button
                                    type="submit"
                                    className="foc"
                                >
                                    Register
                                </button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}