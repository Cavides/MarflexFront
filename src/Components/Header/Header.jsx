import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.css";
import Navbar from "../Navbar/Navbar";

const logo =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";
const carrito =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/carrito_okck8g.png";

function Header() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="header">
      {/* logo */}

      <div className="header__containerLogo">
        <Link className="navBar__navLink" to="/">
          <img src={logo} className="header__logo" />
        </Link>
      </div>

      {/* barra busqueda */}

      <div className="header__search-field" id="searchform">
        <input type="text" id="searchterm" placeholder="¿Qué estas buscando?" />
        <button type="button" id="search">
          Buscar!
        </button>
      </div>

      {/* ingreso-registro-cuentas */}

      <div className="header__cuenta">
        <ul className="header__cuenta-menu">
          <li className="cuenta__item">
            <b>
              <Link className="navBar__navLink" to="/register">
                Registrarse
              </Link>{" "}
            </b>
          </li>
          <li className="cuenta__item"> / </li>
          <li className="cuenta__item">
            <b>
              <Link className="navBar__navLink" to="/login">
                Ingresar
              </Link>{" "}
            </b>
          </li>
        </ul>

       
      </div>

      {/* carrito */}

      <Link className="navBar__navLink" to="/cart">
        <div className="header__containerCarrito">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span className="carrito__quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
