import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(name, email, password);
    }

    return (
        <div className="loginForm">
            <div className="container">
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-field my-2">
                        <label htmlFor="fullname">Name</label>
                        <Input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-field my-2">
                        <label htmlFor="email">E-mail</label>
                        <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-field my-2">
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button type="submit" text="Register" />
                    <p className="my-2">Already have an account?<Link to="/login">Login here</Link></p>
                </form>

            </div>
        </div>
    );
}