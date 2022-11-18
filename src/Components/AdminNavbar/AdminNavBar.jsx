import React from "react";
import { NavLink } from "react-router-dom";
import "./estilos.css";

const logo =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";

function AdminNavBar() {
  return (
    <div className="body_Admin">
      <div className="header_Admin">
        <div className="container_Admin">
          <div className="btn-menu_Admin">
            <label for="btn-menu_Admin">☰</label>
          </div>
          <div className="logo_Admin">
            <h1>
              <img src={logo} />
            </h1>
          </div>
        </div>
      </div>
      <div className="capa_Admin"></div>

      <input type="checkbox" id="btn-menu_Admin" />
      <div className="container-menu_Admin">
        <div className="cont-menu_Admin">
          <nav>
            <NavLink className="navBar__navLink" to="/admon">
              Inicio
            </NavLink>
            <NavLink className="navBar__navLink" to="/admonCatalogo">
              Catalogo
            </NavLink>
            <NavLink className="navBar__navLink" to="/pedidos">
              Pedidos
            </NavLink>
            <NavLink className="navBar__navLink" to="/facturas">
              Facturas
            </NavLink>
          </nav>
          <label for="btn-menu_Admin">✖️</label>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
