import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "./Admin.css";
const Home = () => {

    let history = useHistory()

    const [users, setUsers] = useState({
        list :[]
        
    })
    const [appointment, setAppointment] = useState({
        appointmentList :[]
        
    })
    

    const getUsers = async () =>{
        let result = await axios.get(`http://localhost:3001/customers/`)
        console.log("Se esperan los clientes...", result.data)
        setUsers({...users, list: result.data})
    }
    const getAppointments = async () =>{
        let result = await axios.get(`http://localhost:3001/appointments/`)
        console.log("Se esperan las citas...", result.data)
        setAppointment({...appointment, appointmentList: result.data})

    }

    useEffect(()=>{
        getUsers();
        getAppointments();
           

    },[]);

    const verClientes = () =>{
        document.getElementById("tablaClientes").style.display="flex";
        document.getElementById("tablaCitas").style.display="none";
    }
    const verCitas = () =>{
        document.getElementById("tablaClientes").style.display="none";
        document.getElementById("tablaCitas").style.display="flex";
    }

    return(
        <div className="vistaAdmin">
            <div className="botonesVistas">
                <button className="cambiaVista" onClick={()=> verClientes()}>Clientes</button>
                <button className="cambiaVista" onClick={()=> verCitas()}>Citas</button>
            </div>
            <div className="mostrarClientes" >
                <div id="tablaClientes" >
                    {
                    !users.list[0]?.nombre
                    ?
                    <>
                        <div>
                            Los clientes no se han cargado correctamente
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <div className="cabeceraDatos">
                                <div className="nombreListado1">
                                    Nombre
                                </div>
                                <div className="apellido1Listado1">
                                    Primer Apellido
                                </div>
                                <div className="apellido2Listado1">
                                    Segundo Apellido
                                </div>
                                <div className="dniListado1">
                                    DNI
                                </div>
                                <div className="telefonoListado1">
                                    Telefono
                                </div>
                                <div className="emailListado1">
                                    Email
                                </div>

                            </div>
                            
                            {users.list.map(user=>{
                                return(
                                    <div className="listadoClientes" key={user.id}>
                                        
                                        <div className="nombreListado">{user.nombre}</div>
                                        <div className="apellido1Listado">{user.apellido1}</div>
                                        <div className="apellido2Listado">{user.apellido2}</div>
                                        <div className="dniListado">{user.dni}</div>
                                        <div className="telefonoListado">{user.telefono}</div>
                                        <div className="emailListado">{user.email}</div>


                                    </div>
                                )
                            })}
                        </div>
                    </>
                    }
                </div>
                <div id="tablaCitas">
                    {
                        !appointment.appointmentList[0]?.customerId
                        ?
                        <>
                        <div>Las citas no se han cargado correctamente</div>
                        </>
                        :
                        <div className="allAppointments">
                            <div className="cabecera">
                                <div className="pintaCitasCabecera">Cita</div>
                                <div className="pintaFechasCabecera">Fecha</div>
                                <div className="pintaPacienteCabecera">Paciente</div>
                            </div>
                            {appointment.appointmentList.map(item=>{
                                return(
                                    <div key={item.id} className="listadoAppointments">
                                        
                                            <div className="pintaCitas">#{item.id}</div>
                                            <div className="pintaFechas">{item.appointmentDate}</div>
                                            <div className="pintaPaciente">{
                                                users.list.map(user=>{
                                                    if(user.id === item.customerId){
                                                        const nombre = user.nombre
                                                        const apellido1 = user.apellido1
                                                        const apellido2 = user.apellido2
                                                        return (nombre + " " + apellido1 + " " + apellido2)

                                                    }
                                                })
                                            } </div>
                                             
                                        
                                    </div>

                                )
                            })}
                        </div>
                    }
                </div>


            </div>

        </div> 
    );
}



export default Home;