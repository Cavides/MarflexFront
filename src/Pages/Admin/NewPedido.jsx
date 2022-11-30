import React,{useState} from "react";
import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";

import "./styles/formulario.css";

function NewPedido() {
  const [form, setForm] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [key]: value });
  };

  const handlerSumbit = (e) => {
    e.preventDefault();
    console.log("info enviada", form);
  };

  return (
    <div>
      <AdminNavBar />

      <div className="cuerpo_formulario">
        <div className="body_formulario">
          <div className="form_formulario">
            <h4>Formulario Registro Pedido</h4>
            <p>Por favor diligencie la siguiente información</p>
            <form onSubmit={handlerSumbit}>
              <input
                className="controls_formulario"
                type="date"
                name="fechaPedido"
                placeholder="Fecha pedido"
              />
              <input
                className="controls_formulario"
                type="text"
                name="numfactura"
                placeholder="Numero de factura"
              />
              <input
                className="controls_formulario"
                type="text"
                name="almacen"
                placeholder="Almacen"
              />
              <input
                className="controls_formulario"
                type="text"
                name="nombreProducto"
                placeholder="Nombre del producto"
              />
              <input
                className="controls_formulario"
                type="text"
                name="color"
                placeholder="Color del producto"
              />
              <input
                className="controls_formulario"
                type="text"
                name="medida"
                placeholder="Medida del producto"
              />
              <input
                className="controls_formulario"
                type="text"
                name="especificacion"
                placeholder="Especificacion de producto"
              />
              <input
                className="controls_formulario"
                type="text"
                name="NombreVendedor"
                placeholder="Nombre del vendedor"
              />
              <input
                className="controls_formulario"
                type="file"
                name="foto"
                placeholder="Foto del producto"
              />
              <input
                className="controls_formulario"
                type="date"
                name="fechaEntrega"
                placeholder="Fecha de entrega"
              />
              <input
                className="controls_formulario"
                type="date"
                name="asesor"
                placeholder="Asesor"
              />
              <input
                className="controls_formulario"
                type="text"
                name="proveedor"
                placeholder="Nombre Proveedor"
              />
              <input
                className="controls_formulario"
                type="text"
                name="valorVenta"
                placeholder="Total: $"
              />

              <button className="botons_formulario" type="submit">
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPedido;

