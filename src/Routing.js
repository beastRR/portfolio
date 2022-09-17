import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Blog1 from "./BlogContent/Blog1";
import BlogDesign from "./BlogContent/BlogDesign";
import Home from "./Home";
import Projects from "./Projects";

const Routing=()=>{
    return(
        
        <BrowserRouter>
        <Routes>
            <Route  path ="/home"  element= {<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            </Routes>
            <Routes>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/blog1" element={<Blog1/>}/>
                <Route path="/blog2" element={<BlogDesign/>}/> 
            
            
        </Routes>
        </BrowserRouter>
    )
}
export default Routing;