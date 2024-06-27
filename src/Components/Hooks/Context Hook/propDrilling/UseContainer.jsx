import { useNavContext } from "./Navbar";
import { useContext } from "react";
import { NavbarContext } from "./NavLink";

const UserContainer = () => {
    const [ user , logout ] = useNavContext();
    return (
        <>
        {user ? (
        <>
        <p><em>Hello!!!! {user.name.toUpperCase()}</em></p>
        <button onClick={logout}>Logout</button>
        </>
        ) : (
            <em>Please Login</em>
        )}
        </>
    );
};

export default UserContainer;