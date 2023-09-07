import React from "react";
import gitHub from "../../resources/icons/github-2.png"
import linkedIn from "../../resources/icons/linkedin.png"
import mail from "../../resources/icons/gmail.png"
import { Link } from "react-router-dom";

export const Footer=()=>{
    
    return(
        <footer className="footer">
            <div className="footer_container">     
                <div className="footer_social">
                    <h2>Social</h2>
                    <div className="footer_social-icons">
                        <Link to={"https://github.com/Juan1426"} className="link_item">
                            <img src={gitHub} alt="gitHub logo" className="link_icon"/>
                        </Link>
                        <Link to={"https://www.linkedin.com/in/juan-cruz-caro-011582127/"}className="link_item">
                            <img src={linkedIn} alt=" logo linkedin" className="link_icon"/>
                        </Link>
                        <Link to={"mailto:juancruzzcaro@hotmail.com?subject=Ofer inquiry&cc=suport@company.com&bcc=info@company.com&body=Hi, I would like to learn more about the offer"} className="link_item">
                            <img src={mail} alt="gmail logo" className="link_icon"/>
                        </Link>
                    </div>
                    <div className="footer_social-mail">
                        <h2>juancruzzcaro@hotmail.com</h2>                   
                    </div>
                </div>
                <div className="footer_description">
                    <h2>Juan Cruz Caro</h2> 
                    <p>A Frontend Developer focused on Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>     
                
            </div>
        </footer>
    )
}