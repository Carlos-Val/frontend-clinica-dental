import React from 'react';
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import DemoCarousel from "../../components/Carrusel/Carrusel";


const Home = (props) => {

    return(
        <div className="vistaHome">
            <div className= "imagenDentista">
              
            </div>
            <DemoCarousel/>
                       

            

            <Footer/>
        </div>

        

        
            
       
    );
    



}



export default Home;