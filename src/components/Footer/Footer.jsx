import React from 'react';
import "./Footer.css";
import logoFacebook from "../../img/facebook.png";
import logoTwitter from "../../img/twitter.png";
import logoInstagram from "../../img/instagram.png";
import logoUbicacion from "../../img/ubicacion.jpg";



const Footer = () => { 
    return(
        <div className="componenteFooter">

            <div className="izquierda">
                <img src={logoUbicacion} alt=""/>
            </div>
            <div className="centro"></div>
            
            
            <div className="derecha">
            
                <img src={logoInstagram} alt=""/>           
                <img src={logoFacebook} alt=""/>           
                <img src={logoTwitter} alt=""/>
            </div>
           
           
      
          
           


        </div>
    );
};

export default Footer;