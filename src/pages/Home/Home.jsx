import React from "react";
import { Link } from "react-router-dom";

export const  Home = () => {
    return(
        <div className="main">
            <main className="main-container">      
                <section className="home-hero">
                    <div className="title-juan">
                        <h2 className="name">Welcome! I'm Juan, Frontend Developer</h2>
                    </div>
                    <div className="description">
                        <p>My name is Juan, I'm a front-end developer based on Buenos Aires, Argentina.I'm passionate about cutting-edge, beutiful interfaces and intuitively designs.</p>                       
                    </div>    
                </section>                 
                <section className="about">
                    <div className="about_container">
                        <div className="about_title">
                            <h2>About Me</h2>
                        </div>
                        <div className="about_description">
                            <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique dolorem quod non, excepturi cum ipsum. Tempora, harum, laudantium totam impedit illo laborum distinctio maxime quidem doloribus dicta ex quas!</p>
                            <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique dolorem quod non, excepturi cum ipsum. Tempora, harum, laudantium totam impedit illo laborum distinctio maxime quidem doloribus dicta ex quas!</p>
                            <p className="main_text"></p>               
                        </div>
                    </div>                   
                </section>
                    
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