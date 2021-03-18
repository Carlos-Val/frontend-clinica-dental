import React, { useState} from "react";
import "./Appointment.css";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from "axios";


import  "react-datepicker/dist/react-datepicker.css" ;



const Appointment = (props) =>{
    
    let history = useHistory();
    
    const [appointment, setAppointment] = useState ({

        date : "",
        dentist : ""
    });


    const manejaEstado = (event)=>{
        setAppointment({...appointment,[event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const enviaDatos = async ()=> {
        
        
        let body = {

        appointmentDate: appointment.appointmentDate,
        customerId: appointment.customerId,
        dentistId: appointment.dentistId
        }

        let backData = await axios.post(`http://localhost:3001/customers/${props.customer.customer?.id}/appointments/`, body, { headers: {"Authorization" : `Bearer ${props.customer.token}`} })
        console.log("8=======D",backData);
    }

    if(props.customer?.token){

        return(
            <div className="containerAppointment">
                <div>Estoy en appointments</div>
                <input type="datetime-local" title="Fecha" name="date" onChange={manejaEstado}/>
                <select name="dentist" title= "Elige tu dentista" onChange={manejaEstado}>
                    <option value=""></option>
                    <option value="1">Pepe Garcia</option>
                    <option value="2">Manolo Cabeza Bolo</option>
                    <option value="3">Benito Camelas</option>
                </select>
                <button className='loginBtn' onClick={()=> enviaDatos()}>Send</button>
                
                
                
            
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

export default connect(mapStateToProps)(Appointment);