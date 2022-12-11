import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles/facturaDetail.css";

import { getFactura } from "../../Services/Factura_services";

import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";

function FacturaDetail() {
  const [factura, setFactura] = useState({});
  const [cartFactura, setCartFactura] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFactura(_id);
      setFactura(result);
      setCartFactura(result.cart); //
    };
    fetchData();
  }, []);

const carts = factura.cart;

console.log("Array Cart",cartFactura);


  return (
    <div>
      <AdminNavBar />
      

      <div className="facturaDetail-container">
      <div className="titleFacturaDetail">
        <h1>Factura de Compra</h1>
      </div>
        <div className ="facturadetail-id">
          <h3 className="facturacard__id">
            <a>Id Factura:</a> {factura._id}
          </h3>
        </div>
      <div className="contariner-personalinfo">
        <div className="facturadetail-date">
          <h3 className="facturacard__fecha">
            <a>Fecha de Facturacion: </a>
            {factura.createdAt}
          </h3>
        </div>
        <div className="facturadetail-nombre">
          <h3 className="facturacard__comprador">
            <a>Nombre:</a> {factura.name}
          </h3>
        </div>
        <div className="facturadetail-apellido">
          <h3 className="facturacard__comprador">
            <a>Apellido:</a>  {factura.lastName}
          </h3>
        </div>
        <div className="facturadetail-doc">
          <h3 className="facturacard__doc">
            <a>Documento:</a> {factura.doc}
          </h3>
        </div>
        <div className="facturadetail-telef">
          <h3 className="facturacard__telef">
            <a>Telefono:</a> {factura.telephone}
          </h3>
        </div>
        <div className="facturadetail-email">
          {" "}
          <h3 className="facturacard__email">
            <a>Correo Electronico: </a> {factura.email}
          </h3>
        </div>
        </div>

        <div className="contariner-ubicacioncompra">
        <div className="facturadetail-depart">
          <h3 className="facturacard__Depart">
            <a>Departamento:</a> {factura.departamento}
          </h3>
        </div>
        <div className="facturadetail-ciudad">
          <h3 className="facturacard__ciudad">
            <a>Ciudad:</a> {factura.ciudad}
          </h3>
        </div>
        <div className="facturadetail-dirrecion">
          <h3 className="facturacard__direccion">
            <a>Direcciónn</a> {factura.direccion}
          </h3>
        </div>
        <div className="facturadetail-descripcion">
          <h3 className="facturacard__descripcion">
            <a>Descripción:</a> {factura.descripcion}
          </h3>
        </div>
        </div>

        <div className="contariner-productos">
        <div className="facturadetail-products">
          {" "}
          <h3 className="facturacard__prodcuts">
            <a>Productos</a> 
          {cartFactura.map}
          </h3>
        </div>
        <div className="facturadetail-valor">
          {" "}
          <h3 className="facturacard__valor">
            <a>Total venta:</a> $2.500.000
          </h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FacturaDetail;
