import React from "react";
import { Link } from "react-router-dom";

export const  Home = () => {

    let mail = "mailto:juancruzzcaro@hotmail.com?subject=Ofer inquiry&cc=suport@company.com&bcc=info@company.com&body=Hi, I would like to learn more about the offer"

    return(
        <div className="main">
            <main className="main_container">   
                <section className="home_hero">
                    <div className="title title-juan">
                        <h2 className="name">Welcome! <br/> I'm Juan</h2>
                    </div>
                    <div className="description">
                        <p>I'm a front-end developer based on Buenos Aires, Argentina.I'm passionate about cutting-edge, beutiful interfaces and intuitively designs.</p>                       
                    </div>    
                </section>      

                <section className="about">
                    <div className="about_container">
                        <div className="about_title">
                            <h2 >About Me</h2>
                        </div>
                        <div className="about_description">
                            <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique dolorem quod non, excepturi cum ipsum. Tempora, harum, laudantium totam impedit illo laborum distinctio maxime quidem doloribus dicta ex quas!</p>
                            <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique dolorem quod non, excepturi cum ipsum. Tempora, harum, laudantium totam impedit illo laborum distinctio maxime quidem doloribus dicta ex quas!</p>                          
                        </div>
                        <div className="about_skills-container">
                            <h2>My Skill list</h2>
                            <div className="skills_list">
                                <h2 className="skill_item">HTML</h2>
                                <h2 className="skill_item">SASS</h2>
                                <h2 className="skill_item">ReactJs</h2>
                                <h2 className="skill_item">JavaScript</h2>
                                <h2 className="skill_item">BootsStrap</h2>
                                <h2 className="skill_item">Responsive</h2>
                                <h2 className="skill_item">NodeJs</h2>
                                <h2 className="skill_item">HTML</h2>
                            </div>
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
                        <h2 className="title">Contact</h2>
                    </div>
                    <div className="contact-container">
                       <span>Feel free to contact me on any social media</span>
                       <h2 className="contact_item">Send me a mail <Link className="contact-link" to={mail}>here</Link></h2>
                       <h2 className="contact_item">My <Link className="contact-link" to={"https://www.linkedin.com/in/juan-cruz-caro-011582127/"}>LinkedIn</Link></h2>
                       <h2 className="contact_item">Check my <Link className="contact-link" to={"https://github.com/Juan1426"} >GitHub</Link> and see what I'm working on</h2>
                    </div>
                    <div className="contact_form-container">
                        <form id="form" action="*" method="post" className="contact_form">
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
