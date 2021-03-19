import React, { useState} from "react";
import "./Appointment.css";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import spinergif from "../../img/spiner.gif";



import  "react-datepicker/dist/react-datepicker.css" ;



const Appointment = (props) =>{
    
    let history = useHistory();
    
    const [appointment, setAppointment] = useState ({

        appointmentDate : "",
        dentistId : "",

    });


    const manejaEstado = (event)=>{
        setAppointment({...appointment,[event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const enviaDatos = async ()=> {
        
        
        let body = {

        appointmentDate: appointment.appointmentDate,
        customerId: props.customer.customer.id,
        dentistId: appointment.dentistId
        }

        let backData = await axios.post(`http://localhost:3001/customers/${props.customer.customer?.id}/appointments/`, body, { headers: {"Authorization" : `Bearer ${props.customer.token}`} })
        console.log("8=======D",backData);
        console.log("Este es el body", body);

        setTimeout(()=>{
            history.push("/profile");
            return(
                <div>
                    {
                        <>
                            <div>
                                <img src={spinergif} alt="" className="spinner"/>
                            </div>
                        </>
                    }
                </div>
            )
            
        },2500);
    }
    

    

    if(props.customer?.token){

        return(
            <div className="containerAppointment">
                <pre>{JSON.stringify(appointment,null,2)}</pre>
                <div className="seleccionFecha">
                    Selecciona una fecha:
                    <input className="date" type="datetime-local" title="Fecha" step="1800" min="09:00" max="19:00"  name="appointmentDate" onChange={manejaEstado}/>
                </div>
                <div className="seleccionDentista">
                    Selecciona tu dentista:
                    <select name="dentistId" title= "Elige tu dentista" onChange={manejaEstado}>
                        <option value=""></option>
                        <option value="1">Pepe Garcia</option>
                        <option value="2">Manolo Cabeza Bolo</option>
                        <option value="3">Benito Camelas</option>
                    </select>

                </div>
                <div className="confirmAppointment">
                    <div className="datosUsuario">
                        <div className="nombre">
                            {props.customer.customer.nombre} {props.customer.customer.apellido1} {props.customer.customer.apellido2}
                        </div>
                        <div>Ha concertado una cita para el</div> 
                        <div className="muestraFecha">
                            {appointment.appointmentDate}
                        </div>
                        <div>
                            con el dentista {appointment.dentistId}
                        </div>
                    </div>

                </div>
                <button className='confirmaCita' onClick={()=> enviaDatos()}>Confirmar</button>
            </div>

        )
    
    }else{
        setTimeout(()=>{
            history.push('/');
        },3000);

        return (
            <div className="vuelveHome">
                <div>Redirigiendo a home...</div>
                <div><img src={spinergif} alt="" className="spinner"/></div>
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

export default connect(mapStateToProps)(Appointment);