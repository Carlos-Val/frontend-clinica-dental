import React from 'react';
import {useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import {LOGOUT} from "../../redux/types/customerTypes.js";
import "./Header.css";
import Boton from "../Boton/Boton";
import logo from "../../img/logo.png";



const Header = (props) =>{

    let history = useHistory();

    const logOut = () => {

        props.dispatch({type: LOGOUT, payload: {}});

        history.push("/");
        
    };

    if(props.customer.customer?.nombre){
        return(
            <div className="componenteHeader">
    
                
                <div className="contenedorLogo">
                    <img src={logo} alt=""/>
                </div>
                <div className="espacioVacio"></div>
                <div className="contenedorBotones">
                    <div className="saludoCliente">
                        Bienvenid@ {props.customer.customer?.nombre}
                    </div>
                    <div onClick={()=> logOut()} className="logout" destino="" >Logout</div>
                    <Boton destino="" text="Home"/>
                    
                </div>
    
    
            </div>
        )
    }else{
        return(
            <div className="componenteHeader">
    
                
                <div className="contenedorLogo">
                    <img src={logo} alt=""/>
                </div>
                <div className="espacioVacio"></div>
                <div className="contenedorBotones">
                    <Boton destino="" text="Home"/>
                    <Boton destino="login" text="Login"/>
                    <Boton destino="register" text="Registro"/>
                </div>
    
    
            </div>
        );
    }



    
};

const mapStateToProps =state =>{
    return{
        customer : state.customerReducer.customer
    }
};

export default connect(mapStateToProps)(Header);