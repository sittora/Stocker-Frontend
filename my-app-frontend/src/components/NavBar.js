import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div id="navbar">
            <NavLink className="nav-button" exact to="/">Stocks</NavLink>
            <NavLink className="nav-button" to="/users">Users</NavLink>
        </div>
    )
}

export default NavBar;