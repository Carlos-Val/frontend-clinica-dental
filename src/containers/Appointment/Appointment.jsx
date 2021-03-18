import React,{useState} from "react";
import "./Appointment.css";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Appointment = (props) =>{
    
    let history = useHistory();

    
    const [startDate, setStartDate] = useState(new Date());

    if(props.customer?.token){

        return(
            <div className="containerAppointment">
                <div>Estoy en appointments</div>
                <input type="datetime-local" title="Fecha" name="date" onChange={manejaEstado}/>
               
                {/* <DatePicker
                selected={startDate} 
                onChange={date => setStartDate(date)}

                /> */}

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