import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "./Admin.css";
const Home = () => {

    let history = useHistory()

    const [users, setUsers] = useState({
        list :[]
        
    })
    console.log("Este es el contenido de list",users.list)

    const getUsers = async () =>{
        let result = await axios.get(`http://localhost:3001/customers/`)
        console.log("Se esperan los clientes...", result.data)
        setUsers({...users, list: result.data})
    }

    useEffect(()=>{
        getUsers();
           

    },[]);

    return(
        <div className="vistaAdmin">
            Soy la vista Admin
            <div className="mostrarClientes">
                <div className="tablaClientes">
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

            </div>

        </div> 
    );
}
{/* <div className='mapContainer'></div>
{appointment.future?.result.map(consultation => {
                        return (
                            <div className='dataCollection' key={consultation.id} onClick={()=> clickMe(consultation)}>
                                <div className='professional'>
                                    Professional: {consultation.ProfessionalId}
                                </div>
                                <div className='id'><div></div> */}


export default Home;