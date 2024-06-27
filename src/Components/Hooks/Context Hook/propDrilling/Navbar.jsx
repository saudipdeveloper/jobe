import { createContext, useState } from 'react';
import NavLink from './NavLink';
import { useContext } from 'react';

  export const NavbarContext =  createContext();
  export const useNavContext = () => useContext(NavbarContext);

const Navbar = () => {
    const [user, setUser] = useState({ name : 'saudip'});

    const logout = () => {
        setUser(null);
    };
return (

    <NavbarContext.Provider value={{ user, logout }}>
    <nav>
    <em>
        <h1>PROPS-DRILLING</h1>
    </em>
    <NavLink />

    </nav>    
    </NavbarContext.Provider>
  
);

};

export default Navbar;