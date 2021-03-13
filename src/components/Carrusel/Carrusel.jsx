import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel }  from "react-responsive-carousel";
import carrusel1 from "../../img/carrusel1.jpg";
import carrusel2 from "../../img/carrusel2.jpg";
import carrusel3 from "../../img/carrusel3.jpg";



class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                
                <div className="carrusel">
                    <img src={carrusel1} alt=""/>
                </div>
                <div className="carrusel">
                    <img src={carrusel2} alt=""/>
                </div>
                <div className="carrusel">
                    <img src={carrusel3} alt=""/>
                </div>
                
            </Carousel>

        );
    }
};




export default DemoCarousel;