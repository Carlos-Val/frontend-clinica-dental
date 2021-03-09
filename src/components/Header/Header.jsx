import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";
import logo from "../../img/logo.png";

const Header = () =>{
    return(
        <div className="componenteHeader">
            
            <div className="logo"><img src={logo} alt=""/></div>
            <Boton destino="" text="Home"/>
            <Boton destino="login" text="Login"/>
            <Boton destino="register" text="Register"/>


        </div>
    );
};

export default Header;