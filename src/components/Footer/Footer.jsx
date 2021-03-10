import React from 'react';
import "./Footer.css";
import logo from "../../img/logo.png";

const Footer = () =>{
    return(
        <div className="componenteFooter">
            
            <div className="logo"><img src={logo} alt=""/></div>
           

        </div>
    );
};

export default Footer;