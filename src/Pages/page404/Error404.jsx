import React from 'react'
import "./error404.css";

const img ="https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664198872/imagenes/Error-404_jkep5q.webp";

function error404() {
  return (
    <div className="error404">
    <img src={img} ></img>

    </div>
  )
}

export default error404
