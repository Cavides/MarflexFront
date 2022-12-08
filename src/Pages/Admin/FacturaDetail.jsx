import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./styles/facturaDetail.css";

import { getFactura } from '../../Services/Factura_services';

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';

function FacturaDetail() {
  const [factura, setFactura] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFactura(_id);
      setFactura(result);
    };
    fetchData();
  }, []);


    
  return (
    <div>
       <AdminNavBar />

      <div className='facturaDetail-container'>
      <h3 className="facturacard__title"><a>Numero de Factura:</a> {factura._id}</h3>
      <h3 className="facturacard__title"><a>Fecha de Facturacion: </a>{factura.createdAt}</h3>
      <h3 className="facturacard__title"><a>Comprador:</a> {factura.name} {factura.lastName}</h3>
      <h3 className="facturacard__title"><a>Documento:</a> {factura.doc}</h3>
      <h3 className="facturacard__title"><a>Departamento:</a> {factura.departamento}</h3>
       <h3 className="facturacard__title"><a>Ciudad:</a> {factura.ciudad}</h3>
       <h3 className="facturacard__title"><a>Total venta:</a> {factura.total}</h3>
      </div>


    </div>
  )
}

export default FacturaDetail
