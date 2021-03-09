import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";

const Header = () =>{
    return(
        <div className="componenteHeader">

            <Boton destino="" text="Home"/>
            <Boton destino="login" text="Login"/>
            <Boton destino="register" text="Register"/>


        </div>
    );
};

export default Header;