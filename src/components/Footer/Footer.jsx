import React from "react"
import { NavLink } from "react-router-dom"

import "./Footer.css"

const Footer = () =>{

    return(
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="navlink_item">Item1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="navlink_item">Item1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="navlink_item">Item1</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer

