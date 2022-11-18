import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const img1 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/camion_ddvrzu.png";
const img2 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/dinero_bjtxq5.png";
const img3 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/IconCasa_nisyi5.png";

const mueble1 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble1_yev7hv.jpg";
const mueble2 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble2_uhuyu1.jpg";
const mueble3 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble3_htgoka.jpg";
const mueble4 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble4_msnadk.jpg";

const cred = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626274/imagenes/sistecredito_opwvma.png";

function Home() {

  return (
    <div>
    
      {/* adjuntar link */}
      <div className="aviso">
        <p><Link className= 'navBar__navLink' to='/coberturaenvios'>Envios a más de 400 municipios en Colombia</Link> </p>
      </div>

      <Header />
      <Navbar />

      <div className="Hero">
        <div className="Hero__Content">
          {/* Carrusel de img */}
          <div className="slider-container">
            <ul>
              <li>
                <img src={mueble1} />{" "}
              </li>
              <li>
                <img src={mueble3} />{" "}
              </li>
              <li>
                {" "}
                <img src={mueble2} />
              </li>
              <li>
                <img src={mueble4} />{" "}
              </li>
            </ul>
          </div>

          {/* Imagenes relacionadas */}
          <div className="Hero__Image">
            <div className="Hero__image-uno">
              <p>
                Envios a casi 400 municipios en todo el terriotrio Colombiano
              </p>
              <img src={img1} />
            </div>

            <div className="Hero__image-uno">
              <p>Ahorra comprando los mejores productos para el hogar</p>
              <img src={img2} />
            </div>

            <div className="Hero__image-uno">
              <p>Todo lo que necesitas para la comodidad en tu casa</p>
              <img src={img3} />
            </div>
          </div>
          {/* productos aleatorios */}
          <div className="Hero__productsrandom"></div>

          {/* Imagen de Credito */}
          <div className="Hero__credito">
            <img src={cred} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
