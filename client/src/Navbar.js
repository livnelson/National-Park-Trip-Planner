import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
    const history = useHistory();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        console.log("User logged out")
        history.push("/");
        setIsLoggedIn(false);
    }

    return (
        <div className="navbar">
            <NavLink
                to="/Home"
                exact
                className="nav-link"
            > Home
            </NavLink>
            <NavLink
                to="/"
                exact
                className="nav-link"
            > Log In
            </NavLink>
            <Link
                to="/"
                exact
                onClick={handleLogout}
                className="nav-link"
            > Log Out
            </Link>
        </div>
    );
}

export default Navbar;