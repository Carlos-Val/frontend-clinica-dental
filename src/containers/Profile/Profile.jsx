import React from "react";
import {connect} from 'react-redux';
import "./Profile.css";




const Profile = (props) => {


    

    return (
        <div className="vistaProfile">
            <div className="tarjetas">
                <div className="tarjetaPerfil">
                    <div className="linkPerfil" >
                        <p>Mi perfil</p>
                    
                    </div>
                    <div className="vistaDatos"> 
                    
                        <div className="customerData">
                            <p>
                            Nombre: {props.customer.customer.nombre}<br/>
                            Primer apellido: {props.customer.customer.apellido1}<br/>
                            Segundo apellido: {props.customer.customer.apellido2}<br/>
                            DNI: {props.customer.customer.dni}<br/>
                            Teléfono: {props.customer.customer.telefono}<br/>
                            email: {props.customer.customer.email}<br/>
                            </p>
                        </div>
                    
                    </div>
                
                </div>
                <div className="tarjetaCitas">
                    <div className="tituloCita">
                        Mis citas
                    </div>
                    <div className="contenidoCita">
                        
                    </div>

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

