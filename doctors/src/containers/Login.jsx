// import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Login() {

    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);

    const validationSchema = Yup.object({
        email: Yup.string().email("Enter valid email").required("This field is required"),
        password: Yup.string().min(6, "Length must be 6 characters").required("This field is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     console.log(emailRef.current.value, passwordRef.current.value);
    // }

    return (
        <div className="loginForm">
            <div className="container">
                <h2>Login</h2>

                <form onSubmit={formik.handleSubmit}>
                    <div className="input-field my-2">
                        <label htmlFor="email">E-mail</label>
                        <Input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>

                    <div className="input-field my-2">
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>

                    <Button type="submit" text="Login" />
                    <p className="my-2">Don't have an account?<Link to="/register">Register here</Link></p>
                </form>

            </div>
        </div>
    );
}