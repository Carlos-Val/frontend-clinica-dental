import React from 'react';
import "./Footer.css";
import logo from "../../img/logo.png";
import logoFacebook from "../../img/facebook.png";

const Footer = () =>{
    return(
        <div className="componenteFooter">
            
            <div className="logo"><img src={logo} alt=""/></div>
            <span class="material-icons-outlined"><img src={logoFacebook} alt=""/></span>
           


        </div>
    );
};

export default Footer;