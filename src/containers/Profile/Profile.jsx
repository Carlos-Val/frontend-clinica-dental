import React from "react";
import {connect} from 'react-redux';
import "./Profile.css";



const Profile = (props) => {

    

    return (
        <div className="vistaProfile">

            <div className="navBar">
                <div className="linkPerfil" >
                    <p>Perfil</p>
                    {/* <div>{JSON.stringify(customer)}</div> */}
                </div>
                <div className="linkCitas" >
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
const mapStateToProps = state =>{
    return{
        customer: state.customerReducer.customer
    }
}


export default connect(mapStateToProps)(Profile);

