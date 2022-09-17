import React from "react";
import { Link, NavLink } from "react-router-dom" ;
import "./base.css";

const activateLink=({isActive})=>{
    return{
        fontWeight: isActive?900:600, 
        color : isActive? "rgb(130, 40, 221)": "black",
    }
}
const Base =({
    title="",
    className="bg-white",
    children
})=>{
    const header =()=>{
     return(
        <div>
            <ul className="nav">
                <li classname = "nav-item ">
                    <NavLink  style={activateLink} className='nav-link' to="/home" > Home </NavLink> 
                </li>

                <li classname = "nav-item">
                    <NavLink style={activateLink} className={"nav-link"} to="/about" >About Me </NavLink>
                </li>

                <li  classname = "nav-item">
                <NavLink style={activateLink} className={"nav-link"} to="/blog" >Blog </NavLink>
                </li>

                <li classname = "nav-item">
                    <NavLink style={activateLink} className={"nav-link"} to="/projects" >Projects </NavLink>
                </li>
            </ul>
        </div>
     );   
    };
    
    
    
    return(
        <div className="container-fluid bg-white">
            {header()}
            <h2 className="heading text-center">{title}</h2>

            <div className={className}>{children}</div>

            <div className="moveFooter" >
            <footer className="card-footer bg-info text-center "  >
                <h3 className="p-3 mb-3 text-white"><span className="text-danger">Connect</span> with me</h3>
                <div className="text-success  foot">
                    <ul className="nav ">
                        <li className="nav-item">
                           <a className="nav-link text-dark"  href="https://github.com/beastRR">| Github |</a>  
                        </li>
                        <li className="nav-item">
                           <a className="nav-link text-dark" href="https://www.linkedin.com/in/rahul-raushan-beastmd/">| LinkedIN |</a>  
                        </li>
                        <li className="nav-item">
                           <a className="nav-link text-dark" href="https://twitter.com/rahulbst05">| Twitter |</a>  
                        </li>
                        
                    </ul>
                   
                </div>
            </footer>
            </div>
        </div>
    )
}

export default Base;