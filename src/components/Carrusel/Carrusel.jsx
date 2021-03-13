import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel }  from "react-responsive-carousel";
import carrusel1 from "../../img/carrusel1.jpg";
import carrusel2 from "../../img/carrusel2.jpg";
import carrusel3 from "../../img/carrusel3.jpg";



class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={carrusel1} alt=""/>
                    <p className="carrusel">Legend 1</p>
                </div>
                <div>
                    <img src={carrusel2} alt=""/>
                    <p className="carrusel">Legend 2</p>
                </div>
                <div>
                    <img src={carrusel3} alt=""/>
                    <p className="carrusel">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(DemoCarousel, document.querySelector('.demo-carousel'));


export default DemoCarousel;