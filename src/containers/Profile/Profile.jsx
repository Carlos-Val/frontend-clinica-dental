import React from "react";
import "./Profile.css";
import {connect} from "react-redux";



const Profile = (props) => {

    

    

    return (
        <div className="vistaProfile">

            <div className="navBar">
                <div className="linkPerfil">
                    <p>Perfil</p>
                </div>
                <div className="linkCitas">
                    <p>Citas</p>
                </div>
            </div>
            <div className="vistasNavBar">
                <div className="vistaPerfil">
                    Soy el cliente
                </div>
                <div className="vistaCitas">
                    Soy la cita del cliente
                </div>
            </div>
            
            
        </div>

        
    )
}



export default connect()(Profile);

