import React from "react";
import Base from "./Base";
import './projects.css';
const Projects =()=>{
    return(
        <div>
            <Base title="MY PROJECTS" className="">
            <div className="container row main">
                <div  className="col-8 projTopic mb-3">MEMORY PUZZLE
                <p className="para">A basic puzzle where one have to match pair of same fruits out of many different fruits.
                    All fruits will be hidden at different boxes, one should remember the position of fruits in the boxes. </p>
                <p className="para">Stack used <span className="btn btn-info mx-3 text-white">JavaScript, CSS, HTML </span></p>
                </div>
                <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://game105.netlify.app/"}>Run Live</button></div>
                    <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://github.com/beastRR/game1"}>source code</button></div>
                    <hr/>

                    
                <div  className="col-8 projTopic mb-3">TickTackToe Puzzle
                <p className="para">The evergreen TickTackToe with ReactJs.</p>
                <p className="para">Stack used <span className="btn btn-info mx-3 text-white">ReactJs</span></p>

                </div>
                <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://codesandbox.io/s/ticktacktoe-3ji2i"}>Run Live</button></div>
                    <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://codesandbox.io/s/ticktacktoe-3ji2i"}>source code</button></div>
                    <hr/>

                    
                <div  className="col-8 projTopic mb-3">CASH REGISTER
                <p className="para">For calculating amount and number of denominations to be returned.
                </p>
                <p className="para">Stack used <span className="btn btn-info mx-3 text-white">JavaScript, CSS, HTML </span></p>                </div>
                <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://cash-reg05.netlify.app/"}>Run Live</button></div>
                    <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://github.com/beastRR/cash-register-mark-10-"}>source code</button></div>
                    <hr/>

                    
                <div  className="col-8 projTopic mb-3">CHECK BIRTH DATE IS LUCKY OR NOT
                <p className="para">Website to check if your Birth date is Lucky or not. It evalutes that using the Palindrome concept.</p>
                <p className="para">Stack used <span className="btn btn-info mx-3 text-white">JavaScript, CSS, HTML </span></p>

                </div>
                <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://check-your-dob-luck.netlify.app/"}>Run Live</button></div>
                    <div className="col-2 text-center mb-3">
                    <button className="btn btn-success" onClick={()=>window.location.href="https://github.com/beastRR/isYourBirthdayLucky"}>source code</button></div>
                    <hr/>

                    
                <div  className="col-8 projTopic mb-3">ECOMMERCE WEBSITE
                <p className="para"> An proper functioning Ecommerce website with varieties of functionalities
                like User Login, Admin Login , Add to cart product , checkout with payment gateway and a lot more. </p>
                <p className="para">Stack used <span className="btn btn-info mx-3 text-white"><span style={{ fontWeight:"bolder"}}>"MERN"</span> full stack </span></p>

                </div>
                <div className="col-2 text-center mb-3">
                    <button className="btn btn-success">Run Live </button></div>
                    <div className="col-2 text-center mb-3">
                    <button className="btn btn-success">source code</button></div>
                    <hr/>

                    
            </div>
            </Base>
        </div>
    )
}
export default Projects;
 