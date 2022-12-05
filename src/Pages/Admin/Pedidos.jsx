import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";
import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPedidos } from "../../Services/Pedidos_services";
import Card from "../../Components/CardPedidos/Card";

function Pedidos() {

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPedidos();
      setPedidos(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <AdminNavBar />

      <Link className="navBar__navLink" to="/newpedido">
      <div className="catalogoAdmon__ButtonAgg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          className="bi bi-bookmark-plus-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"
          />
        </svg>
      </div>
      </Link>

      <div className="catalogoAdmon__pedidos">
        {pedidos.map((pedido) => {
          return <Card pedido={pedido} key={pedido.numfactura} />;
        })}
      </div>
    </div>
  )
}

export default Pedidos
