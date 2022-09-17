import React from "react";
import BlogDesign from "./BlogDesign";

const Blog1=()=>{
    return(
        <div>
            <BlogDesign title="TypeScript, A Less Error Prone Way To Write JavaScript">
                <div className="text-dark text-center" style={{fontWeight:"bold"}}>
                <h2 className="projTopic">What is TypeScript?</h2>
                TypeScript is a syntactic superset of JavaScript which adds static typing.
                This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
                <h2 className="projTopic mt-5">Why should I use TypeScript?</h2>
                JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

                In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

                TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

                For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
                
                <h2 className="projTopic mt-5">How to use TypeScript?</h2>
                A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

                The next section shows how to get the compiler setup for a local project.

                Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!

                </div>
            </BlogDesign>
        </div>
    )
}

export default Blog1;