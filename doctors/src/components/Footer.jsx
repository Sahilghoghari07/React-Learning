import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <p className="text-muted">&copy;2025 All Rights Reserved.<Link to='/'>SIMS Hospital</Link></p>
            </div>
        </footer>
    );
}