import React from 'react';
import "./Footer.css";
import logoFacebook from "../../img/facebook.png";
import logoTwitter from "../../img/twitter.png";
import logoInstagram from "../../img/instagram.png";
import logoUbicacion from "../../img/ubicacion.png";
import telefono from "../../img/telefono.png";
import arroba from "../../img/arroba.png";




const Footer = () => { 
    return(
        <div className="componenteFooter">
            
                <div className="izquierda">
                    <div className="ubicacion1"><img src={logoUbicacion} alt=""/></div>
                    <div className="direccion">
                        <div className="ubicacion2">C/ Sonrisa de Ochando, nº 8</div>
                        <div className="ubicacion3">46038 Valencia</div>
                    </div>
                    
                    

                    
                </div>
            
                <div className="centro">
                    <div className="centroContacto">
                        <div className="contacto">CONTACTO</div>
                        <div className="telefono">
                            <div className="telefono1"><img src={telefono} alt=""/></div>
                            <div className="numeroTelefono">96368752</div>
                        </div>
                        <div className="arroba">   
                            <div className="arroba1"><img src={arroba} alt=""/></div>
                            <div className="email">cliente@cuquident.es</div>
                        </div>
                    </div>
                </div>
            
                <div className="derecha">
                    <div className="globalRedes">
                        <div className="siguenos">SÍGUENOS</div>
                        <div className="redesSociales">
                            <div className="instagram"><img src={logoInstagram} alt=""/></div>         
                            <div className="facebook"><img src={logoFacebook} alt=""/></div>           
                            <div className="twitter"><img src={logoTwitter} alt=""/></div>
                        </div>
                    </div>
                </div>            
                    
                
            
        
        
      
                   
           


        </div>
    );
};

export default Footer;