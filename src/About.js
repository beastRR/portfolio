import React from "react";
import Base from "./Base";
import "./about.css";
const About =()=>{
    return(
        <div>
            <Base>
            
            <div className=" card1">
                <div className="card2">
                    <div className="row">
                        <div className="col-11 mb-5">
                        <h1 className="text-warning">Rahul Raushan</h1>
                        <p className="paraAbout"> I am a Web Developer, I like the FrontEnd part more. I have a keen interest in developing web applications.
                        I enjoy it a lot. I have completed my Masters Of Computer Application (MCA) this year 2022.
                        So, as a fresher I am really excited to start professional career and really eager to learn new technologies.
                        I have made several projects while learning new technologies and 
                        I believe that learning should never stop and therfore more and more projects will be available on this site,
                        when I start working on a new technology.   </p>
                        </div>

                        <div className="col-1">

                        </div>
                        <div className="col-11 pb-5">
                            <h3 className="text-success" style={{fontWeight:"bolder"}}>
                                <span style={{color:"rgb(130, 40, 221)"}}>|&nbsp;</span>
                                Technologies</h3>
                            <p className="paraAbout">I'm Familiar with HTML5, CSS3, Javascript, Java, Bootstrap and hosting.
                                I have also done Full Stack <span style={{color:"magenta"}}>MERN</span>, 
                                so, I am also a MERN Developer.
                            </p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    
            </div>
            </div>

            

            
            </Base>
        </div>
    )
}
export default About;
 
