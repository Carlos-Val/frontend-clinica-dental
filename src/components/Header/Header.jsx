import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";
import logo from "../../img/logo.png";

const Header = () =>{
    return(
        <div className="componenteHeader">

            
            <div className="contenedorLogo">
                <img src={logo} alt=""/>
            </div>
            <div className="espacioVacio"></div>
            <div className="contenedorBotones">
                <Boton destino="" text="Home"/>
                <Boton destino="login" text="Login"/>
                <Boton destino="register" text="Registro"/>
            </div>


        </div>
    );
};

export default Header;