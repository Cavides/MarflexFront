import React from "react";

import "./preguntasfrecuentes.css";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function PreguntasFrecuentes() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="pyr-container">
        {/* titulo */}
        <div className="pyr__title">
          <h1>Preguntas Frecuentes</h1>
        </div>

        <br />
        
        <div className="pyr__subtitle">
          <b>¿Cuánto tarda mi compra en llegar?</b>
        </div>
        <div className="pyr__description">
          <p>
            Nuestros tiempos de entrega son de 5 a 12 días hábiles dependiendo
            de la ubicación y factores logísticos. Remítete a la sección de
            envíos para más información.
          </p>
        </div>
        <br />

        <br />
      
        <div className="pyr__subtitle">
          <b>¿Hacen envíos hasta mi residencia?</b>
        </div>
        <div className="pyr__description">
          <p>
            Realizamos envíos a todo Colombia; ingresa a la sección de
            coberturas para verificar tu municipio.
          </p>
        </div>
        <br />

        <br />
     
        <div className="pyr__subtitle">
          <b>¿Es seguro comprar en Marflex.com?</b>
        </div>
        <div className="pyr__description">
          <p>
            Somos una compañía legalmente constituida en Colombia y trabajamos
            con proveedores y compañías líderes en el mercado. Nuestro sitio web
            cuenta con todos los estándares de seguridad cibernética, tu
            información siempre será confidencial y todos los procesos de pago
            están cifrados.
          </p>
        </div>
        <br />

        <br />
        {/* proposito */}
        <div className="pyr__subtitle">
          <b> ¿Qué medios de pago puedo usar?</b>
        </div>
        <div className="pyr__description">
          <p>
            Se aceptan la gran mayoría de métodos de pago en Colombia
            incluyendo:
          </p>
          <ul>
            <li>
              <p>
                Tarjetas de crédito: Visa, MasterCard, American Express, Diners
                Club, Codensa, etc.
              </p>
            </li>

            <li>
              <p>Efectivo: Efecty, Vía Baloto, Pagos 4-72, Davivienda, etc.</p>
            </li>

            <li>
              <p>
                Transferencia bancaria de bancos en Colombia a través de PSE.
              </p>
            </li>
          </ul>
        </div>
        <br />

        <br />
        {/* proposito */}
        <div className="pyr__subtitle">
          <b> ¿Puedo pagar contra entrega?</b>
        </div>
        <div className="pyr__description">
          <p>
            Actualmente no ofrecemos pagos contra entrega, pero ofrecemos una
            variedad de medios electrónicos para facilitar tu compra. No te
            preocupes, tu dinero siempre estará protegido por Mercado Pago.
          </p>
        </div>
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default PreguntasFrecuentes;
