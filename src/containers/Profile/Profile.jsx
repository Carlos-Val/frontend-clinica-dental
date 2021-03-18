import React,{useState, useEffect} from "react";
import {connect} from 'react-redux';
import "./Profile.css";
import {useHistory} from 'react-router-dom';
import axios from 'axios';




const Profile = (props) => {

    let history = useHistory();

    //Hook appointments
    const [appointmentId, setAppointment] = useState({
        appointment: []
        
    });
    //Hook dentistas
    const [dentistId, setDentist] = useState({
        dentist: []
    })
    

    const traerCitas = async()=>{
        let result = await axios.get( `http://localhost:3001/customers/${props.customer.customer?.id}/appointments/`, { headers: {"Authorization" : `Bearer ${props.customer.token}`} });
        console.log(result.data)
        setAppointment({...appointmentId, appointment: result.data});
    }

    const traerDentistas = async()=>{
        let consulta = await axios.get(`http://localhost:3001/dentists/`);
        console.log(consulta.data);
        setDentist({...dentistId, denstist: consulta.data});
    }

    useEffect(()=>{
        traerCitas();
        traerDentistas();
        obtenerDentista();    

    },[]);
    
    
    const obtenerDentista = () =>{
        appointmentId.appointment.map(cita=>{
            console.log("8==========D", cita.dentistId);
            return cita.dentistId
        })
    }
    
    
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
                                appointmentId.appointment.length == 0
                                ?
                                <>
                                    <div>
                                        No tienes citas pendientes
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        {appointmentId.appointment?.map(cita=>{
                                            return(
                                                <div>
                                                    <p>
                                                        Fecha de la cita : {cita.appointmentDate}<br/>
                                                        Dentista : {dentistaId.dentist.firstName}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

    }else{
        setTimeout(()=>{
            history.push('/');
        },2000);

        return (
            <div>Redirigiendo a home...</div>
            
        )
    }
    
};

const mapStateToProps = state =>{
    return{
        customer: state.customerReducer.customer
    }
};


export default connect(mapStateToProps)(Profile);

