import React, {useState, useEffect} from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import checkError from "../../utiles/utiles";
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/customerTypes.js';
import imagenPubli from "../../img/imagenPubli.jpeg"

import "./Login.css"


const Login = (props) =>{ 

    let history = useHistory();

    const [dataLogin, setLogin] = useState({

        email : "",
        password : ""
    });

    const [mensaje, setMensaje] = useState("");

    //USEEFFECTS

    useEffect(()=>{

    },[]);

    //HANDLERS

    const manejaEstado = (ev)=>{
        setLogin({...dataLogin,[ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
    }
    



    const logueame = async ()=>{

        //COMPROBACION DE ERRORES
        setMensaje("");

        let mensajeError = checkError(dataLogin);

        setMensaje(mensajeError);

        if(mensajeError){
            return;
        };
        //LO QUE ENVIAMOS AL BACKEND

        let body = {
            email : dataLogin.email,
            password : dataLogin.password
        }


        let result = await axios.post( "http://localhost:3001/customers/login", body);
        
        props.dispatch({ type: LOGIN, payload: result.data });


        
        if(!result.data.jwt?.error){
            setTimeout(()=>{
                history.push("/profile");
            },1000);
        }else{
            setMensaje(result.data.jwt?.error);
        }
    };
    const loginAdmin = async ()=>{
        //COMPROBACION DE ERRORES
        setMensaje("");

        let mensajeErrorAdmin = checkError(dataLogin);

        setMensaje(mensajeErrorAdmin);

        if(mensajeErrorAdmin){
            return;
        };
        //Datos al backend
        let body = {
            email : dataLogin.email,
            password : dataLogin.password
        }


        let result = await axios.post( "http://localhost:3001/clinic/", body);
        
        props.dispatch({ type: LOGIN, payload: result.data });


        if(!result.data.error){
            setTimeout(()=>{
                history.push("/admin");
            },1000);
        }else{
            setMensaje(result.data.error);
        }
        
    }

    return(
        <div className="vistaLogin">
            <div className="textoLogin">
                <p> Accede a tu area personal y ten todas tus citas bajo control. </p>
            </div>

            <div className="formularioLogin">
                <Input title="Email" type="text" name="email" onChange={manejaEstado}/>
                <Input title="Contraseña" type="password" name="password" onChange={manejaEstado}/>
                <button id="botonLogin" onClick={()=> logueame()}>Login</button>
                <div className="mensajeError">{mensaje}</div>

            </div>
            <div className="publi">
                <img src={imagenPubli} alt=""></img>
            </div>
            <div className="loginAdmin">
                <p>Si eres administrador accede desde aquí.</p>
            </div>
            <div className="formularioAdmin">
                <div className="inputsAdmin">
                    <Input type="text" name="email" placeholder="email" onChange={manejaEstado} />
                    <Input type="password" name="password" placeholder="password" onChange={manejaEstado} />
                </div>
                <div className="botonAdmin">
                    <button id="botonLogin" onClick={()=> loginAdmin()}>Accede</button>
                </div>
                <div className="mensajeError">{mensaje}</div>
                
                
            </div>
            
        </div>

        
    )
} 

export default connect()(Login);