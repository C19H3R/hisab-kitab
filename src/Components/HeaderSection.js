import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const HeaderSection = () => {
    return (
        <div className="row  ">
            <div className="col text-light text-right pr-0 bg-dark">
            <h1><b>HISAB</b></h1></div>
            <div className=" text-light text-left pl-0 bg-dark"><h1><b>-</b></h1></div>
            <div className="col text-light text-left pl-0 bg-dark">
            <h1><b>KITAB</b></h1>
            </div>
        </div>
        )
};

export default HeaderSection;
