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

    const click = () =>{
        history.push("/profile");
    };

    if(props.customer.customer?.nombre || props.admin.dataClinic?.nombre){
        return(
            <div className="componenteHeader">
    
                
                <div className="contenedorLogo">
                    <img src={logo} alt=""/>
                </div>
                <div className="espacioVacioLogout"></div>
                <div className="contenedorBotonesLogout">
                    <div onClick={()=>click()} className="saludoCliente">
                        Bienvenid@ {props.customer.customer?.nombre || props.admin.dataClinic?.nombre}
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
        customer : state.customerReducer.customer,
        admin: state.adminReducer.admin

    }
};

export default connect(mapStateToProps)(Header);