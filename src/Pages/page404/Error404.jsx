import React from "react";
// import "./error404.css";
// import "../../Components/Header/header.css";
import { NavLink } from "react-router-dom";

const img =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664198872/imagenes/Error-404_jkep5q.webp";

function error404() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="error404">
      <img src={img} alt="Error 404" />

      {/* <!-- start nav --> */}
      <nav id="menu">
        {/* <!-- start menu --> */}
        <ul>
        <li>
        <button
                  type="button"
                  className="navBar__navLink"
                  to={`/profile/${user.userName}`}
                >
                  <picture className="profile__section1__photo">
                    <img
                      className="profile__section1__photo__img"
                      src={user.avatar}
                      alt="avatar"
                    />
                  </picture>
                </button>
        </li>
          <li>
            {/* <a href="#">Enlace 2</a> */}
            <NavLink
                  className="navBar__navLink"
                  to={`/profile/${user.userName}`}
                >
                  <i className="fa-regular fa-user" />
                  {user.name}
                </NavLink>
            {/* <!-- start menu desplegable --> */}
            <ul>
            <li>
              Configuracion
            </li>
              <li>
              <button type="submit" className="navBar__logout">   
                  Cerrar sesión
                </button>
              </li>
            </ul>
            {/* <!-- end menu desplegable --> */}
          </li>
        </ul>
        {/* <!-- end menu --> */}
      </nav>
      {/* <!-- end nav --> */}
      
    </div>
  );
}

export default error404;
