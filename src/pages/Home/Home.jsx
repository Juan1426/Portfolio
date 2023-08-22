import React from "react";
import { Link } from "react-router-dom";

export const  Home = () => {
    return(
        <div className="main">
            <main className="main-container">      
                <section className="home-hero">

                </section>                 
                    <div className="title-juan">
                        <h2 className="name">Welcome! I'm Juan, Frontend Developer</h2>
                    </div>
                    <div className="description">
                        <p>My name is Juan, I'm a front-end developer based on Buenos Aires, Argentina.I'm passionate about cutting-edge, beutiful interfaces and intuitively designs.</p>
                        
                    </div>             
                    
                    <section className="proyects">    
                        <div>
                        <h2 className="title-projects">Projects</h2>
                        </div>
                            
                        <ul className="proyects-list">
                            <li><Link to={"https://github.com/Juan1426/Pokedex/tree/master"} className="proyect">Pokedex</Link></li>
                            
                            <li><Link to={"https://github.com/Juan1426/DiscoLobo"} className="proyect">Disco Lobo</Link></li>
                            <li className="proyect">#######</li>
                        </ul>     
                    </section>           
            </main>
        </div>
    )
}

//