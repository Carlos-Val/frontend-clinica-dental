import React,{useEffect} from "react";
import {connect} from 'react-redux';
import "./Profile.css";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { SHOW } from "../../redux/types/appointmentsTypes";
import Boton from "../../components/Boton/Boton";





const Profile =  (props) => {

    let history = useHistory();
    

    const traerCitas = async()=>{
        let result = await axios.get( `http://localhost:3001/customers/${props.customer.customer?.id}/appointments/`, { headers: {"Authorization" : `Bearer ${props.customer.token}`} });
        console.log(result.data)
        props.dispatch({type: SHOW, payload: result.data});
    }

    

    useEffect(()=>{
        traerCitas();
           

    },[]);
    
    
    
    
    
    if(props.customer?.token){
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
                            {
                                props.appointment[0] === undefined
                                ?
                                <>
                                    <div>
                                        No tienes citas pendientes
                                    </div>
                                </>
                                :
                                <>
                                    <div >
                                        {props.appointment.map(cita=>{
                                            return(
                                                <div key={cita.id}>
                                                    <p >
                                                        Fecha de la cita : {cita.appointmentDate}
                                                        Dentista: {cita.dentistId}
                                                        
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <Boton destino="appointments" text="Solicitar cita"/>
                </div>
            </div>
        )

    }else{
        setTimeout(()=>{
            history.push('/');
        },2500);

        return (
            <div className="vuelveHome">
                <div>Redirigiendo a home...</div>
                <div><img src="../../img/spiner1.gif" alt="" className="spinner"/></div>
            </div>     
        )
    }
    
};

const mapStateToProps= state =>{
    return{
        customer: state.customerReducer.customer,
        appointment: state.appointmentsReducer.appointment
        
    }
};


export default connect(mapStateToProps)(Profile);

