import React from "react";
import { Link } from "react-router-dom";

export const  Home = () => {
    return(
        <div className="main">
            <main className="main_container">   
                <section className="home-hero">
                    <div className="title title-juan">
                        <h2 className="name">Welcome! I'm Juan, Frontend Developer</h2>
                    </div>
                    <div className="description">
                        <p>My name is Juan, I'm a front-end developer based on Buenos Aires, Argentina.I'm passionate about cutting-edge, beutiful interfaces and intuitively designs.</p>                       
                    </div>    
                </section>      

                <section className="about">
                    <div className="about_container">
                        <div className="about_title">
                            <h2 className="title" >About Me</h2>
                        </div>
                        <div className="about_description">
                            <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique dolorem quod non, excepturi cum ipsum. Tempora, harum, laudantium totam impedit illo laborum distinctio maxime quidem doloribus dicta ex quas!</p>
                            <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique dolorem quod non, excepturi cum ipsum. Tempora, harum, laudantium totam impedit illo laborum distinctio maxime quidem doloribus dicta ex quas!</p>
                                      
                        </div>
                    </div>                   
                </section>
                    
                <section id="projects" className="projects">    
                    <div className="title_projects">
                        <h2 className="title">Projects</h2>    
                        <p>Here you will found some of my personal work.</p>    
                    </div>
                    <div className="projects_container">
                        <div className="proyect_row">
                            <div className="proyect_row-img">#img</div>
                            <Link to={"https://github.com/Juan1426/Pokedex/tree/master"} className="proyect_row-link">Pokedex </Link>
                            <div className="proyect_row-desc">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fuga ea obcaecati molestiae aperiam quibusdam atque voluptate optio nulla iste!</p>
                                
                            </div>
                        </div>
                        <div className="proyect_row">
                            <div className="proyect_row-img">#img</div>
                            <Link to={"https://github.com/Juan1426/DiscoLobo"} className="proyect_row-link">Disco Lobo</Link>
                            <div className="proyect_row-desc">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fuga ea obcaecati molestiae aperiam quibusdam atque voluptate optio nulla iste!</p>
                            </div>
                        </div>                
                    </div>     
                </section>  

                <section className="contact" id="contact">
                    <div className="contact_hero">
                        <h2>Contact</h2>
                    </div>
                    <div className="contact_form-container">
                        <form action="" method="post" className="contact_form">
                            <div className="contact_form-field">
                                <label className="contact_form-label" htmlFor="">Name</label>
                                <input required placeholder="    Enter Your Name..." type="text" className="contact_form-input" />
                            </div>
                            <div className="contact_form-field">
                                <label htmlFor="" className="contact_form-label">Email</label>
                                <input required placeholder="    Enter Your Email" type="text" className="contact_form-input" />
                            </div>
                            <div className="contact_form-field">
                                <label htmlFor="" className="contact_form-label">Email</label>
                                <input required placeholder="    Enter Your Email" type="text" className="contact_form-input" />
                            </div>
                            <div className="contact_form-field">
                                <label htmlFor="" className="contact_form-label">Messeage</label>
                                <textarea name="" id="" cols="30" rows="10" className ="textarea" placeholder="  Enter you message..."></textarea>
                            </div>
                            <button className="btn_contact" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}
