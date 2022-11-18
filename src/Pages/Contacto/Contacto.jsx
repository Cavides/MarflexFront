import React from "react";
import "./contacto.css";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Contacto() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="contacto-container">
        {/* titulo */}
        <div className="contacto__title">
          <h1>Contacto</h1>
        </div>
        <br />

        <div className="contacto__subtitle">
          <b>Encuentranos en nuestras tiendas fisicas</b>
        </div>
        <br />
        <br />

        <div className="contacto__sede-container">
          <table>
            <tr>
              <td>
                <div className="contacto__sede">
                  <div className="contacto__subtitle">
                    <h3>Sede CAI</h3>
                  </div>
                  <div className="contacto__description">
                    <p>
                      Cra 44 # 62 - 09 Sur, Barrio Candelaria La Nueva
                      <br />
                      Horarios:Lunes a Domingo
                      <br />
                      10:00 AM - 08:00 PM
                      <br />
                    </p>
                  </div>
                  <div className="contacto__maps">
                    <a
                      href="https://www.google.com/maps/place/Muebles+Y+Colchones+Marflex/@4.5731052,-74.1533256,18.75z/data=!4m5!3m4!1s0x0:0x41ad0031a300be5e!8m2!3d4.5733188!4d-74.1534082?hl=es-419"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>
                </div>
              </td>{" "}
              <td>
                <div className="contacto__sede">
                  <div className="contacto__subtitle">
                    <h3>Sede SAN MIGUEL</h3>
                  </div>
                  <div className="contacto__description">
                    <p>
                      Cra 44B # 62A - 13 Sur, Barrio Candelaria La Nueva
                      <br />
                      Horarios:Lunes a Domingo
                      <br />
                      10:00 AM - 06:00 PM
                      <br />
                    </p>
                  </div>
                  <div className="contacto__maps">
                    <a
                      href="https://www.google.com/maps/place/Muebles+Y+Colchones+Marflex/@4.5739211,-74.1567472,16.25z/data=!4m5!3m4!1s0x0:0x41ad0031a300be5e!8m2!3d4.5733188!4d-74.1534082?hl=es-419"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <div className="contacto__sede">
                  <div className="contacto__subtitle">
                    <h3>Sede OLARTE</h3>
                  </div>
                  <div className="contacto__description">
                    <p>
                      Cra 72D # 57A - 49 Sur, Barrio Olarte
                      <br />
                      Horarios:Lunes a Domingo
                      <br />
                      10:00 AM - 08:00 PM
                      <br />
                    </p>
                  </div>
                  <div className="contacto__maps">
                    <a
                      href="https://www.google.com/maps/place/Cra.+72D+%2357-14,+Bogot%C3%A1/@4.600856,-74.166636,16z/data=!4m5!3m4!1s0x8e3f9ef7181ea823:0x455a79c7ac2a25e!8m2!3d4.6008564!4d-74.1666358?hl=es-419"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="contacto__sede">
                  <div className="contacto__subtitle">
                    <h3>Sede MARFLEX SHOP</h3>
                  </div>
                  <div className="contacto__description">
                    <p>
                      Cra 72D # 57-03 Sur, Barrio Olarte
                      <br />
                      Horarios:Lunes a Domingo
                      <br />
                      10:00 AM - 08:00 PM
                      <br />
                    </p>
                  </div>
                  <div className="contacto__maps">
                    <a
                      href="https://www.google.com/maps/place/Cra.+72D+%2357-14,+Bogot%C3%A1/@4.600856,-74.166636,16z/data=!4m5!3m4!1s0x8e3f9ef7181ea823:0x455a79c7ac2a25e!8m2!3d4.6008564!4d-74.1666358?hl=es-419"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>
                </div>
              </td>

              <td>
                <div className="contacto__sede">
                  <div className="contacto__subtitle">
                    <h3>Sede SISTECREDITO</h3>
                  </div>
                  <div className="contacto__description">
                    <p>
                      Cra 72C Bis #57 - 93 Sur, Barrio Olarte
                      <br />
                      Horarios:Lunes a Domingo
                      <br />
                      10:00 AM - 08:00 PM
                      <br />
                    </p>
                  </div>
                  <div className="contacto__maps">
                    <a
                      href="https://www.google.com/maps/place/Cra.+72D+%2357-14,+Bogot%C3%A1/@4.600856,-74.166636,16z/data=!4m5!3m4!1s0x8e3f9ef7181ea823:0x455a79c7ac2a25e!8m2!3d4.6008564!4d-74.1666358?hl=es-419"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>
                </div>
              </td>

              <td>
                <div className="contacto__sede">
                  <div className="contacto__subtitle">
                    <h3>Sede BOSA</h3>
                  </div>
                  <div className="contacto__description">
                    <p>
                      Cra 80 # 63-35 Sur, Barrio Bosa Centro
                      <br />
                      Horarios:Lunes a Domingo
                      <br />
                      10:00 AM - 08:00 PM
                      <br />
                    </p>
                  </div>
                  <div className="contacto__maps">
                    <a
                      href="https://www.google.com/maps/place/Cra.+80+%2363-35,+Bogot%C3%A1/@4.606982,-74.183874,16z/data=!4m5!3m4!1s0x8e3f9e42df242cd7:0x617e282b59e1762e!8m2!3d4.6069824!4d-74.1838738?hl=es-419"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <br/>
        <div className="contacto__subtitle">
            <h2>Telefono:  01 8000 999 9999</h2>
        </div>
        <br/>
        <div className="contacto__subtitle">
            <h3>WhatsApp</h3>
        </div>

        <div className="contacto__subtitle">
            <ul>
                <li>300 6507370</li>
                <li>301 5894392</li>
                <li>310 4148095</li>
            </ul>
        </div>
    <br/>



      </div>  

      <Footer />
    </div>
  );
}

export default Contacto;
