import React from 'react';
import DemoCarousel from '../../components/Carrusel/Carrusel';
import Footer from "../../components/Footer/Footer";
import "./Home.css";



const Home = (props) => {

    return(
        <div className="vistaHome">
            <div className= "imagenDentista">
              
            </div>
            <div className="dinsTot">
                <div className="texto1">
                    <div className="descripcionClinica">
                        <h2>Más de 30 años de experiencia</h2>
                        <p>Dentista en Valencia, especializada en implantes dentales avanzados y casos complejos con atrofia maxilar, incluso los casos complejos descartados por otros dentistas.
Clínica Dental Asensio, desde 1997 a tu lado, con certificado del Sistema de Calidad, conforme a la norma ISO 9001 y UNE, que concede AENOR (Asociación Española de Normalización y Certificación), cuidando tu salud bucal y la de tu familia.
Llámanos y concierta tu primera visita gratis, con revisión completa, radiografía, diagnóstico y plan de tratamiento.</p>

                    </div>
                    
                
                </div>
                <div className="carruselPadre">
                    <DemoCarousel/>
                </div>
                <div className="texto2">
                    <div className="descripcionClinica2">
                        <h2>Qué ofrecemos</h2>
                        <p>Te ofrecemos todas las ventajas que puedes encontrar en las grandes franquicias dentales sin sus complicaciones:<br/>

- Instalaciones recién reformadas, cómodas y funcionales en un ambiente moderno y relajado.<br/>
- TAC dental 3D, otros equipos de alta tecnología y acceso a los tratamientos más avanzados.<br/>
- Amplio horario de atención para que puedas venir cuando más te convenga.<br/>
- Convenios con todos los seguros médicos y posibilidad de financiar tu tratamiento.<br/>
Y, como no somos franquicia, podemos ofrecerte los mejores precios y garantizarte que cuando vuelvas encontrarás de nuevo al dentista que te atendió y que te tratará como te mereces.</p>

                    </div>
                
                </div>
            </div>
            <div className="recipienteFooter">
                <Footer/>
            </div>
        </div>

        

        
            
       
    );
    



}



export default Home;