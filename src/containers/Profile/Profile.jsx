import React from "react";
import {connect} from 'react-redux';
import "./Profile.css";
import {connect} from "react-redux";



const Profile = (props) => {

    
<<<<<<< HEAD

    
=======
>>>>>>> ce42821d651e07cd759b023219512daa1eae9c3f

    return (
        <div className="vistaProfile">

            <div className="navBar">
<<<<<<< HEAD
                <div className="linkPerfil">
=======
                <div className="linkPerfil" >
>>>>>>> ce42821d651e07cd759b023219512daa1eae9c3f
                    <p>Perfil</p>
                    {/* <div>{JSON.stringify(customer)}</div> */}
                </div>
<<<<<<< HEAD
                <div className="linkCitas">
=======
                <div className="linkCitas" >
>>>>>>> ce42821d651e07cd759b023219512daa1eae9c3f
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


<<<<<<< HEAD

export default connect()(Profile);
=======
export default connect(mapStateToProps)(Profile);
>>>>>>> ce42821d651e07cd759b023219512daa1eae9c3f

