import React from "react";
import gitHub from "../../resources/icons/github-2.png"
import linkedIn from "../../resources/icons/linkedin.png"
import { Link } from "react-router-dom";
export const  Navbar=()=>{
    return(
        <header className="header">
            <div className="logo">
                <h2>Juan Cruz Caro</h2>              
            </div>
            <div className="links">
                <Link to={"https://github.com/Juan1426"} className="link-item">
                    <img src={gitHub} alt="gitHub logo" className="link-icon"/>
                </Link>
                <Link to={"https://www.linkedin.com/in/juan-cruz-caro-011582127/"}className="link-item">
                    <img src={linkedIn} alt=" loco linkedin" className="link-icon"/>
                </Link>
            </div>
        </header>

    )
}

