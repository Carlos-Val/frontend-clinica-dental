import React, {useState, useEffect} from "react";
import Input from "../../components/Input/Input";
import axios from "axios";

const Login = () =>{ 

    const [dataLogin, setLogin] = useState({

        email : "",
        password : ""
    })

    //HANDLERS

    const manejaEstado = (ev)=>{
        setLogin({...dataLogin,[ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
    }

    useEffect(()=>{

    },[]);

    const logueame = async ()=>{

        let result = await axios.post( "http://localhost:3001/customers/login", dataLogin)
        console.log("soy el resultado", result)
    }

    return(
        <div>
            <Input title="Email" type="text" name="email" onChange={manejaEstado}/>
            <Input title="Contraseña" type="password" name="password" onChange={manejaEstado}/>
            <button onClick={()=> logueame()}>Login</button>
        </div>
    )
} 

export default Login;