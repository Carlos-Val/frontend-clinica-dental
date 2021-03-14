import React from 'react';
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import DemoCarousel from "../../components/Carrusel/Carrusel";


const Home = (props) => {

    return(
        <div className="vistaHome">
            <div className= "imagenDentista">
              
            </div>
            <div className="dinsTot">
                <div className="texto1">Aqui ponemos texto</div>
                <div className="carruselPadre">
                <DemoCarousel/>
                </div>
                <div className="texto2">Aqui si queremos tambien</div>
            </div>
            <div className="recipienteFooter">
                <Footer/>
            </div>
        </div>

        

        
            
       
    );
    



}



export default Home;