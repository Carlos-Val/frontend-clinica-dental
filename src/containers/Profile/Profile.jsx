import React,{useEffect} from "react";
import {connect} from 'react-redux';
import "./Profile.css";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { DESTROY, SHOW,} from "../../redux/types/appointmentsTypes";

import Avatar, {ConfigProvider} from 'react-avatar';





const Profile =  (props) => {

    let history = useHistory();

    const goAppointment = () =>{
        history.push("/appointments");
    }
    

    const traerCitas = async()=>{
        let result = await axios.get( `http://localhost:3001/customers/${props.customer.customer?.id}/appointments/`, { headers: {"Authorization" : `Bearer ${props.customer.token}`} });
        console.log("traer citas que tengo",result.data)
        props.dispatch({type: SHOW, payload: result.data});
    }

    const deleteAppointment = async(cita) =>{
        let elimina = await axios.delete( `http://localhost:3001/customers/${props.customer.customer?.id}/appointments/${cita.id}/`, { headers: {"Authorization" : `Bearer ${props.customer.token}`} });
        console.log("esta es la cita a eliminar",elimina);
        props.dispatch({type: DESTROY, payload: elimina.data});
    }    

    useEffect(()=>{
        traerCitas();
           

    },[]);

    useEffect(()=>{
        console.log("Actualizacion de appointments...",props.appointment);
    });
    
    
    
    
    if(props.customer?.token){
        return (
            <div className="vistaProfile">
                <div className="tarjetas">
                <ConfigProvider colors={[]}>
                        <Avatar className="avatar" name={props.customer.customer.nombre} size="100" textSizeRatio={1.50} />
                </ConfigProvider>
                    <div className="avatarDatos">
                        
                        <div className="tarjetaPerfil">

                            <div className="linkPerfil" >

                                <p>Datos personales</p>

                            </div>
                            <div className="vistaDatos"> 

                                <div className="customerData">
                                    <div>
                                    <div className="datosPersonales">Nombre: {props.customer.customer.nombre}<br/></div>    
                                    <div className="datosPersonales">Primer apellido: {props.customer.customer.apellido1}<br/></div>
                                    <div className="datosPersonales">Segundo apellido: {props.customer.customer.apellido2}<br/></div>
                                    <div className="datosPersonales">DNI: {props.customer.customer.dni}<br/></div>
                                    <div className="datosPersonales">Teléfono: {props.customer.customer.telefono}<br/></div>
                                    <div className="datosPersonales">email: {props.customer.customer.email}<br/></div>                             
                                    </div>
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
                                                    <div className="citasPersonales" key={cita.id}>
                                                        <div>
                                                            Fecha de la cita : {cita.appointmentDate}
                                                            Dentista: {cita.dentistId}
                                                            <button className="cancelarCita" onClick={()=>deleteAppointment(cita)}>Cancelar cita</button>

                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <button className="botonGoAppointment" onClick={()=> goAppointment()}>Solicitar Cita</button>
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
                <div><img src="../../img/spinnerv.gif" alt="" className="spinner"/></div>
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

