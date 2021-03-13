import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Footer from "../../components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "./Home.css";


const Home = (props) => {

    return(
        <div className="vistaHome">
            <div className= "imagenDentista">
              
            </div>
            
             
                       

            


            <Footer/>
        </div>

        

        
            
       
    );
    



}

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="../../img/carrusel1.jpg" />
                    <p className="carrusel">Legend 1</p>
                </div>
                <div>
                    <img src="../../img/carrusel2.jpg" />
                    <p className="carrusel">Legend 2</p>
                </div>
                <div>
                    <img src="../../img/carrusel3.jpg" />
                    <p className="carrusel">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(DemoCarousel, document.querySelector('.demo-carousel'));

export default Home;