import React, {useState, useEffect} from "react";
import Boton from "../../components/Boton/Boton";

import checkError from "../../utiles/utiles";

import "./Register.css";



const Register = () =>{

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

        

    };

    //RETURN

    return(
        <div className="vistaRegister">
           A tomar por cleta la biciculo
            <pre>{JSON.stringify(customer,null,2)}</pre>
            <div className="formRegistro">





            <p> Nombre : </p>
            <input type="text" maxLength="30" placeholder="" name="nombre" onChange={manejaEstado}></input>
            <p>Email : </p>
            <input type="email" maxLength="30" placeholder="" name="email" onChange={manejaEstado}></input>
            <p>Password : </p>
            <input type="password" maxLength="12" placeholder="" name="password" onChange={manejaEstado}></input>
            <p>Nombre : </p>
            <input type="text" maxLength="12" placeholder="" name="password" onChange={manejaEstado}></input>
            <p>Nombre : </p>
            <input type="text" maxLength="12" placeholder="" name="password" onChange={manejaEstado}></input>

            </div>

            <button onClick={()=> enviaDatos()}>Envia datos al backend</button>

            <Boton nombre='Home' destino=''/>
            <div>{mensaje}</div>
        </div>

          
    );

    

}

export default Register;
