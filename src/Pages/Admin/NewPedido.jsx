import React,{useState} from "react";
import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";
import {createPedido, getPedidoByCode} from "../../Services/Pedidos_services";

import "./styles/formulario.css";

function NewPedido() {
  const [form, setForm] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [key]: value });
  };

  // const newPedido = async() =>{
  //   const pedido = await getPedidoByCode(form.numfactura);

  // }

  const handlerSumbit = (e) => {
    e.preventDefault();
    // newPedido();
    createPedido(form);
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
                className="controls_formulario" onChange={handlerChange}
                type="date"
                name="fechaPedido"
                placeholder="Fecha pedido"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="number"
                name="numfactura"
                placeholder="Numero de factura"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="almacen"
                placeholder="Almacen"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="nombreProducto"
                placeholder="Nombre del producto"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="color"
                placeholder="Color del producto"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="medida"
                placeholder="Medida del producto"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="especificacion"
                placeholder="Especificacion de producto"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="foto"
                placeholder="Foto del producto"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="date"
                name="fechaEntrega"
                placeholder="Fecha de entrega"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="asesor"
                placeholder="Asesor"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
                type="text"
                name="proveedor"
                placeholder="Nombre Proveedor"
              />
              <input
                className="controls_formulario" onChange={handlerChange}
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
