import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Carrusel.css";

import carrusel1 from "../../img/cirugia.jpeg";
import carrusel2 from "../../img/implante.jpeg";
import carrusel3 from "../../img/odontologia.jpeg";
import carrusel4 from "../../img/odontopediatria.jpeg";
import carrusel5 from "../../img/protesis.jpeg";
import carrusel6 from "../../img/periodoncia.jpeg";
import carrusel7 from "../../img/ortodoncia.jpeg";
import carrusel8 from "../../img/estetica.jpeg";
import carrusel9 from "../../img/endodoncia.jpeg";




class DemoCarousel extends Component {
    render() {

        const settings = {
            dots: true, 
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            speed: 5000,
            autoplaySpeed: 1000,
            cssEase: "linear"
        };


        return (
            <div className="contenedorCarrusel">
               
            <Slider {...settings}>
                
                <div className="carrusel">
                    <h3>Cirugía</h3>
                    <img src={carrusel1} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Implantes</h3>
                    <img src={carrusel2} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Odontología preventiva</h3>
                    <img src={carrusel3} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Odontopediatría</h3>
                    <img src={carrusel4} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Protesis</h3>
                    <img src={carrusel5} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Periodoncia</h3>
                    <img src={carrusel6} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Ortodoncia</h3>
                    <img src={carrusel7} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Estética dental</h3>
                    <img src={carrusel8} alt=""/>
                </div>
                <div className="carrusel">
                    <h3>Endodoncia</h3>
                    <img src={carrusel9} alt=""/>
                </div>
                
                
            </Slider>
            </div>

        );
    }
};



export default DemoCarousel;