import React from 'react';

import "./Home.css";
import clinica from"../../img/clinica.jpg";

const Home = (props) => {

    return(
        <div className= "vistaHome">
            <img src={clinica} alt=""/>
        </div>
    )

}

export default Home;