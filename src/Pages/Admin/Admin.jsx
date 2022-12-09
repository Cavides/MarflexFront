import React from 'react'


import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';

function Admin() {

const mueble1 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble1_yev7hv.jpg";
const mueble2 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble2_uhuyu1.jpg";
const mueble3 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble3_htgoka.jpg";
const mueble4 = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/mueble4_msnadk.jpg";

  return (
    <div>
      <AdminNavBar />

      <div className="Hero">
        <div className="Hero__Content">
          {/* Carrusel de img */}
          <div className="slider-container">
            <ul>
              <li>
                <img src={mueble1} alt="Foto de mueble"/>{" "}
              </li>
              <li>
                <img src={mueble3} alt="Foto de mueble" />{" "}
              </li>
              <li>
                {" "}
                <img src={mueble2} alt="Foto de mueble"/>
              </li>
              <li>
                <img src={mueble4} alt="Foto de mueble" />{" "}
              </li>
              
            </ul>
          </div>

          </div>
          </div>
    </div>
  )
}

export default Admin
