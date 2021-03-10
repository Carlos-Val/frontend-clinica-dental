import React, {useState, useEffect} from "react";
import Boton from "../../components/Boton/Boton";
import Input from "../../components/Input/Input";

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
                <Input title="Nombre" type="text" name="nombre" onChange={manejaEstado} />
                <Input title="Primer Apellido" type="text" name="apellido1" onChange={manejaEstado}/>
                <Input title="Segundo Apellido" type="text" name="apellido2" onChange={manejaEstado} />
                <Input title="DNI" type="text" name="dni" onChange={manejaEstado}/>
                <Input title="Teléfono" type="text" name="telefono" onChange={manejaEstado} />
                <Input title="Email" type="text" name="email" onChange={manejaEstado}/>
                <Input title="Contraseña" type="text" name="password" onChange={manejaEstado}/>


            </div>

            <button onClick={()=> enviaDatos()}>Envia datos al backend</button>


        </div>

          
    );

    

}

export default Register;
