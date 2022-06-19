import React from "react";
import { NavLink} from "react-router-dom";

import "./Header.css"

const Header = () => {
    return(
        <header>
            <h2>
                <NavLink className="navlink_item" title="Home" to="/">Juan</NavLink>
            </h2>
            <nav>
                <ul>
                    <li className="li">
                        <NavLink className="navlink_item" title="Home" to="/">Home</NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="navlink_item" title="Works" to="/works">Works</NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="navlink_item" title="About" to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>    
        </header>
    )
}

export default Header