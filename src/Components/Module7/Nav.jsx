import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-dark text-light bg-dark">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/course">Course</Link>
                <Link className="nav-link" to="employeeAccount">Employee</Link>
                <Link className="nav-link" to="otherAccount">Other</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                {/* <Link className="nav-link" to="/d_user/kolkata">kolkata</Link> */}
                {/* <Link className="nav-link" to="/d_user/newtown">Newtown</Link> */}
                {/* <Link className="nav-link" to="/d_user/bharat">Bharat</Link> */}
                <Link className="nav-link" to="/account">Account</Link>
                <Link className="nav-link" to="/login">Login</Link>

            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;