import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Course from './Course';
import Blog from './Blog';
import Account from './Account';
import Contact from './Contact';
import Navbar from './Nav';
import Employee from './Employee';
import Other from './Other';
import DynamicUser from './DynamicUser';
import LoginPage from './LoginPage';
import ProtectedRouting from './ProtectedRouting';




const RouterComp = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path="/login" element={<LoginPage/>} />
                 {/* <Route path="/" element={<Home/>} /> */}
                 <Route path="/" element={<ProtectedRouting home = {Home}/>} />
                 
                 <Route path="/about" element={<About/>}>
                    <Route path="employeeAccount" element={<Employee />}/>
                    <Route path="otherAccount" element={<Other />}/>
                 </Route>   
                 <Route path="/course" element={<Course/>} />
                 <Route path="/blog" element={<Blog/>} />
                 <Route path="/account" element={<Account/>} />
                 <Route path="/contact" element={<Contact/>} />
                

                 {/* <Route path="/d_user/:place" element={<DynamicUser/>}/> */}
             
            </Routes>
        </Router>
    );
};

export default RouterComp;