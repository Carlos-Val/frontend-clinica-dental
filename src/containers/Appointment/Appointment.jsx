import React from "react";
import "./Appointment.css";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import moment,{InputMoment} from 'moment';



const Appointment = (props) =>{
    
    let history = useHistory();

    if(props.customer?.token){

        return(
            <div className="containerAppointment">
                <div>Estoy en appointments</div>
                <InputMoment
                    moment={this.state.moment}
                    onChange={this.handleChange}
                    onSave={this.handleSave}
                    minStep={1} // default
                    hourStep={1} // default
                    prevMonthIcon="ion-ios-arrow-left" // default
                    nextMonthIcon="ion-ios-arrow-right" // default
                />
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