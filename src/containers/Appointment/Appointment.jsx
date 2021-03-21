import React, { useState} from "react";
import "./Appointment.css";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import spinergif from "../../img/spiner.gif";
import { CREATE} from "../../redux/types/appointmentsTypes";
import  "react-datepicker/dist/react-datepicker.css" ;




const Appointment = (props) =>{
    
    let history = useHistory();
    
    const [appointment, setAppointment] = useState ({

        appointmentDate : "",
        dentistId : "",

    });

    const mapDentist = (id) => {
        switch (id) {
            case 0:
                return 'Seleccione su dentista'
            

            case 1:
                return 'Dr. Pepe García';
            
            case 2:

                return 'Dr. Manolo Cabezabolo';
            

            case 3:
                return 'Dr. Benito Camela';
           
            default:
                break;

        }
    }  
    
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
        
        props.dispatch({type: CREATE, payload: backData.data})

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
                
                <div className="nombre">
                            Hola, {props.customer.customer.nombre} {props.customer.customer.apellido1} {props.customer.customer.apellido2}
                </div>
                <div className="seleccionFecha">
                    Seleccione una fecha para su cita:
                    <input className="date" type="datetime-local" title="Fecha" step="1800" min="AAAA-MM-DDT09:00" max="AAAA-MM-DDT19:00"  name="appointmentDate" onChange={manejaEstado}/>
                </div>

                <div className="concertarCita">Esta concertando una cita para el día</div> 
                        <div className="muestraFecha">
                            {appointment.appointmentDate} 
                        </div>
                <div>Elija un dentista</div> 


                <div className="seleccionDentista">
                    
                    <select name="dentistId" title= "Elige tu dentista" onChange={manejaEstado}>
                        
                        <option value="0">{mapDentist(0)}</option>
                        <option value="1">{mapDentist(1)}</option>
                        <option value="2">{mapDentist(2)}</option>
                        <option value="3">{mapDentist(3)}</option>
                        
                        
                    </select>
                    

                </div>
                <div className="confirmAppointment">Y, por ultimo, confirme la cita!!                  

                </div>
                <button className='confirmaCita' onClick={()=> enviaDatos()}>Confirmar</button>
            </div>

        )
    
    }else{
        setTimeout(()=>{
            history.push('/');
        },1000);

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