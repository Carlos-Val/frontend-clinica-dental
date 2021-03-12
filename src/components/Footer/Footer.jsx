import React from 'react';
import "./Footer.css";
import logoFacebook from "../../img/facebook.png";
import logoTwitter from "../../img/twitter.png";
import logoInstagram from "../../img/instagram.png";
import logoUbicacion from "../../img/ubicacion.jpg";



const Footer = () => { 
    return(
        <div className="componenteFooter">
            <div className="prueba2">
                <div className="izquierda">
                    <p>dsffsdsf</p><img src={logoUbicacion} alt=""/>
                </div>
            </div>
            <div className="centro"></div>
            
            <div className="prueba1">
                <div className="derecha">            
                    <img src={logoInstagram} alt=""/>           
                    <img src={logoFacebook} alt=""/>           
                    <img src={logoTwitter} alt=""/>
                </div>
            </div>
           
           
      
          
           


        </div>
    );
};

export default Footer;