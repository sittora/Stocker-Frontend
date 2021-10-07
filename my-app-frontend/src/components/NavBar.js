import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div id="navbar">
            <BrowserRouter>
                <NavLink className="nav-button" exact to="/stocks">Stocks</NavLink>
                <NavLink className="nav-button" to="/users">Users</NavLink>
            </BrowserRouter>
        </div>
    )
}

export default NavBar;