
import React from 'react';

import { useEffect, useState } from "react";
import { getAllFacturas } from "../../Services/Factura_services";
import Card from "../../Components/CardFacturas/Card";


import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';



function Facturas() {

  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllFacturas();
      setFacturas(result);
    };
    fetchData();
  }, []);

  return (
   
    <div>
      <AdminNavBar />
      
    <div className="catalogoAdmon__pedidos">
      {facturas.map((factura) => {
        return <Card factura={factura} key={factura._id} />;
      })}
    </div>
  </div>
      
  )
}

export default Facturas
