import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
    return (
        <header>
            <div className="container py-1">
                <div className="d-flex">
                    <p><i className="fa-solid fa-envelope"></i>simshospital@yahoo.com</p>
                    <p><i className="fa-solid fa-phone"></i>+91 12345 67890</p>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="img-section">
                            <Link to="/">
                                <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
                            </Link>
                        </div>
                        <div className="menu-section">
                            <Link to="/">Home</Link>
                            <Link to="/">Doctors</Link>
                            <Link to="/">Departments</Link>
                            <Button type="button" text="Make An Appointment" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}