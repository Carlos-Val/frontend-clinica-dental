import React from 'react';
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Home = (props) => {

    return(
        <div className= "vistaHome">Buenas gracias y muchas noches
            <BrowserRouter>

            <Switch>

            </Switch>
            
            
            <Footer/>
            </BrowserRouter>
            
            
        

        </div>
    
        
        
    );
    



}

export default Home;