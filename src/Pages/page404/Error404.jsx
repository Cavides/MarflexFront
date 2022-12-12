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

     
      
    </div>
  );
}

export default error404;
