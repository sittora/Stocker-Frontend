import React from "react";
import NavBar from "./NavBar";
import { useHistory } from 'react-router-dom';

function Header({  }) {
    const history = useHistory();

    return (
        <div id="header">
            <h1 id="title" onClick={e => history.push("/")}>Stocker</h1>
            <NavBar />
        </div>
    )
}


export default Header;