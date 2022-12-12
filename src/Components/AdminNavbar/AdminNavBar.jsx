import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./estilos.css";

const logo =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";

function AdminNavBar() {

  const navigate = useNavigate();

  const cerrarsesion = () => {
    Swal.fire({
      title: '¿Estas seguro que deseas cerrar sesion?',
      text: "¿Ya terminaste de hacer todo lo planeado?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesion'
  }).then((result) => {
      if (result.value) {
          navigate('/', { replace: true });
      }
  });
  };

const handlelogout = (e) =>{
  e.preventDefault();
  cerrarsesion()
}


  return (
    <div className="body_AdminW">
      <div className="header_Admin">
        <div className="container_Admin">
          <div className="btn-menu_Admin">
            <label htmlFor="btn-menu_Admin">☰</label>
          </div>
          <div className="logo_Admin">
            <h5>
              <img src={logo} alt="logo de la empresa Marflex"/>
            </h5>
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
          <div className="button_cerrarSesion">
          <button className="button_cerrarsesion_admon" onClick={handlelogout}>Cerrar Sesion</button>
          </div>

          <div className="button_ayuda">
            <a>Ayuda</a>
          </div>
          
          <label htmlFor="btn-menu_Admin">✖️</label>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
