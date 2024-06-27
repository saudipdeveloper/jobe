import { Link, Outlet } from "react-router-dom";
const About = () => {
    return(
       <div className="container">
         <div className=" bg-secondary-subtle fs-1">About Components</div>
         <nav className="navbar bg-dark text-light d-flex justify-content-around">
                <Link className="nav-link" to="employeeAccount">Employee</Link>
                <Link className="nav-link" to="otherAccount">Other</Link>
         </nav>
         <Outlet />
       </div>
    );
};

export default About;