import React from 'react';
import "./Boton.css";
import {useHistory} from 'react-router-dom';


const Boton = (props) =>{

    let history = useHistory();

const give = () =>{
    history.push(`/${props.destino}`);
};

    return(
        <div onClick={()=>give()} className="megaBoton">
            {props.text}

        </div>
    );

};

export default Boton;