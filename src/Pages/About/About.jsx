import React from "react";

import "./about.css";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="about-container">
        {/* titulo */}
        <div className="about__title">
          <h1>¿Quienes somos?</h1>
        </div>
        <br />

        {/* descripcion */}
        <div className="about__description">
          <p>
            Marflex cuya razón social es MARFLEX SHOP S.A.S. con N.I.T. 99999999
            es una empresa colombiana que busca mejorar la calidad de vida de
            las personas desde el hogar a través de una oferta de valor
            asequible, inclusiva y de calidad. Marflex es Hogar, por esto se
            dedica a comercializar, fabricar y ofrecer todos los servicios que
            necesita cualquier persona en su Hogar.
          </p>
          <br />
          <p>
            Marflex no es una empresa con canales exclusivamente en línea, con
            oficinas centrales en la ciudad de Bogotá y centros de distribución
            aliados en varios departamentos del país. Marflex cuenta con
            cobertura nacional e internacional dependiendo del producto y
            actualmente tiene showrooms abiertos al publico.
          </p>
        </div>
        <br />
        {/* proposito */}
        <div className="about__subtitle">
          <b>Proposito</b>
        </div>
        <div className="about__description">
          <p>Mejorar la calidad de vida de las personas desde el Hogar.</p>
        </div>
        <br />
        {/* vision */}
        <div className="about__subtitle">
          <b>Visión</b>
        </div>
        <div className="about__description">
          <p>
            Ser la empresa # 1 de la industria del Hogar en Latinoamérica para
            el 2026, ofreciendo una solución completa a las necesidades en los
            hogares de las personas.
          </p>
        </div>
        <br />
        {/* Valores */}

        <div className="about__subtitle">
          <b>Valores</b>
        </div>
        <div className="about__description">
          <ul>
            <li>
              <p>
                Conscientes: Estamos buscando un mundo mejor, por eso somos
                conscientes de nuestro entorno.
              </p>
            </li>

            <li>
              <p>
                Disruptivo: Estamos convencidos de que siempre hay una mejor
                manera de hacer las cosas.
              </p>
            </li>

            <li>
              <p>
                Humano: Aprendemos y evolucionamos como cualquier de ustedes.
              </p>
            </li>

            <li>
              <p>Optimista: Rendirnos no es una opción.</p>
            </li>

            <li>
              <p>
                Confiable: Para nosotros la confianza es más importante que el
                dinero.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
