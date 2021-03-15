import React from "react";
import "./Profile.css";



const Profile = (props) => {

    let cambiaVista = (vistaPresente, vistaFutura) =>{
        let vistaActual = vistaPresente;
        let vistaDestino = vistaFutura;

        vistaActual.hidden= true;
        vistaDestino.hidden= false;

    }

    return (
        <div className="vistaProfile">

            <div className="navBar">
                <div className="linkPerfil" onClick={()=> cambiaVista('vistaPerfil', 'vistaCitas')}>
                    <p>Perfil</p>
                </div>
                <div className="linkCitas" onClick={()=> cambiaVista('vistaPerfil', 'vistaCitas')}>
                    <p>Citas</p>
                </div>
            </div>
            <div className="vistasNavBar">
                <div className="vistaPerfil" hidden="false" >
                    Soy el cliente
                </div>
                <div className="vistaCitas" hidden="true" >
                    Soy la cita del cliente
                </div>
            </div>
            
            
        </div>

        
    )
}



export default Profile;

