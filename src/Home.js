import React from "react";
import Base from "./Base";
import "./home.css";
import coder from "./coder.png";

const Home=()=>{
    return(
        
            <Base className="">
            <div className="row">
            <div className="col-5  hero">
            <h2 className="line" style={{fontSize:40, fontFamily:"cursive"}}>HELLO   <span style={{color:"red"}}>&nbsp;:)&nbsp;</span></h2>  {/* &nbsp; to add space forcebily */}
                <h1 className="">I AM RAHUL RAUSHAN</h1>
                <p className="paraHome">WEB DEVELOPER</p>
                <button className="but "  onClick={()=>window.location.href='https://drive.google.com/file/d/10GVd2dFcW7Hp9u8QwHwOBtdJiLCmOaIB/view'}>GET RESUME</button>     {/*window.location.href="url" to enable urls in button*/}
                <button className="but " onClick={()=>window.location.href="mailto:beastmd05@gmail.com"}>EMAIL</button>
            </div>

            <div className="col-5 image"><img src={coder} alt="" /></div>
            </div>
            
            </Base>
            
            
    );
}

export default Home;
