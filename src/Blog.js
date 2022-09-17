import React from "react";
import { Link } from "react-router-dom";
import Base from "./Base";
import "./blog.css"
const Blog =()=>{
    return(
        <div>
            <Base>
            <div className="container-fluid " id="division"> 
                <Link className="butBlog text-center nav-link " to={"/blog/blog1"}>TypeScript,A Less Error Prone Way To Write JavaScript. </Link>
                <Link className="butBlog text-center nav-link " to={"/blog2"}>More Blogs on the way.. </Link>
            </div>
            </Base>
        </div>
    )
}
export default Blog;
 