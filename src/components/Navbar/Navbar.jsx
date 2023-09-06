import React from "react";
import gitHub from "../../resources/icons/github-2.png"
import linkedIn from "../../resources/icons/linkedin.png"
import mail from "../../resources/icons/gmail.png"
import { Link } from "react-router-dom";
export const  Navbar=()=>{
    return(
        <header className="header">
            <div className="header_container">
                <div className="logo">
                    <h2 className="logo_name-short">JC</h2>
                    <h2 className="logo_name-large">Juan Cruz Caro</h2>              
                </div>
                <div className="navbar_icons">
                    <Link to={"https://github.com/Juan1426"} className="link_item">
                        <img src={gitHub} alt="gitHub logo" className="link_icon"/>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/juan-cruz-caro-011582127/"}className="link_item">
                        <img src={linkedIn} alt=" loco linkedin" className="link_icon"/>
                    </Link>
                    <Link to={"mailto:juancruzzcaro@hotmail.com?subject=Ofer inquiry&cc=suport@company.com&bcc=info@company.com&body=Hi, I would like to learn more about the offer"} className="link_item">
                        <img src={mail} alt="gmail logo" className="link_icon"/>
                    </Link>
                </div>
            </div>        
        </header>

    )
}

