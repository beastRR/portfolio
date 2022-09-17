import React from "react";
import "./blogDesign.css";
import Base from "../Base";

const BlogDesign=({title="Coming Soon.. Stay Tuned. ", children})=>{
    return(
        <div >
            <Base>
            <div className="container-lg yo ">
                <div className="box">
                    <h1 className="text-success text-center p-4 mb-5">{title}</h1>
                    <div className="content">{children}</div>
                </div>
            </div>
            </Base>
        </div>
    )
}

export default BlogDesign;