import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Student APP</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/RegForm">Register Form</Link>
                <Link to="/AddstudentForm">AddstudentForm</Link>
                <Link to="/CourseForm">Course Form</Link>
            </div>
        </nav> 
    );
}

export default Navbar;