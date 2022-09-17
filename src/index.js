import React from "react";
import Routing from "./Routing";
import ReactDom from "react-dom/client";



const root = ReactDom.createRoot(document.getElementById("root"));  //we cant directly use ReactDom.render()...instead use ReactDom.createRoot(document.getElementById("root"))
root.render(<Routing/>);
