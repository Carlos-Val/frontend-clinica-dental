import React, {useState, useEffect} from "react";

import Input from "../../components/Input/Input";
import axios from "axios";
import {useHistory} from 'react-router-dom';

import checkError from "../../utiles/utiles";

import "./Register.css";



const Register = () =>{

    let history = useHistory();
    //HOOKS

    const [customer, setUser] = useState({
        nombre : "",
        apellido1 : "",
        apellido2 : "",
        dni : "",
        telefono : "",
        email :"",
        password : ""
    });

    const [mensaje, setMensaje] = useState("");

    //USEEFFECTS

    useEffect(()=>{

    },[]);

    useEffect(()=>{

    });

    useEffect(()=>{
        
        return()=>{

        }
    },[]);

    //HANDLERS

    const manejaEstado = (ev)=>{
        setUser({...customer,[ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
    }

    //FUNCIONES

    const enviaDatos = async ()=>{
        //comprobación de errores
        setMensaje("");

        let mensajeError = checkError(customer);

        setMensaje(mensajeError);

        if(mensajeError){
            return;
        };
        //Body a enviar al backend

        let body = {
            nombre : customer.nombre,
            apellido1 : customer.apellido1,
            apellido2 : customer.apellido2,
            dni : customer.dni,
            telefono : customer.telefono,
            email : customer.email,
            password : customer.password
        };
        let dataQueViene = await axios.post("http://localhost:3001/customers/", body)
        

        if(!dataQueViene.data.customer?.error){
            setTimeout(()=>{
                history.push("/login");
            },1000);
        }else{
            setMensaje(dataQueViene.data.customer?.error);
        }

    };

    //RETURN

    return(
        <div className="vistaRegister">
            
            {/* <pre>{JSON.stringify(customer,null,2)}</pre> */}
            <div className="formRegistro">
                <Input title="Nombre" type="text" maxLength="30" name="nombre" onChange={manejaEstado} />
                <Input title="Primer Apellido" type="text"  maxLength="30" name="apellido1" onChange={manejaEstado}/>
                <Input title="Segundo Apellido" type="text"  maxLength="30" name="apellido2" onChange={manejaEstado} />
                <Input title="DNI" type="text"  maxLength="10" name="dni" onChange={manejaEstado}/>
                <Input title="Teléfono" type="text"  maxLength="11" name="telefono" onChange={manejaEstado} />
                <Input title="Email" type="text"  maxLength="30" name="email" onChange={manejaEstado}/>
                <Input title="Contraseña" type="password"  maxLength="12" name="password" onChange={manejaEstado}/>
                

            </div>
            <button id="botonRegistrarse" onClick={()=> enviaDatos()}>Enviar</button>
            <div className="mensajeError">{mensaje}</div>

        </div>

          
    );

    

}

export default Register;
