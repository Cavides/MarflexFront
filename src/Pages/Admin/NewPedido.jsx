import React, { useState } from "react";
import { Link ,useNavigate} from 'react-router-dom';
import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";
import { createPedido, getPedidoByCode } from "../../Services/Pedidos_services";
import Swal from "sweetalert2";

import "./styles/newpedido.css";

function NewPedido() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [key]: value });
  };

  const newPedido = async() =>{
    const pedido = await getPedidoByCode(form.numfactura);
    if (pedido.numfactura) {
      Swal.fire({
        title: 'This code is already in use!',
        text: 'Please enter a different code.',
        icon: 'warning',
        confirmButtonText: 'Got it!',
      });
    }else if(pedido.fechapedido >= pedido.fechaentrega){
      Swal.fire({
        title: 'TLas fechas son invalidas',
        text: 'No se puede viajar al pasado :(.',
        icon: 'warning',
        confirmButtonText: 'Got it!',
      });
  }else{
    const response = await createPedido(form);
    Swal.fire({
      title: 'Your pedido has been created!',
      text: 'Congratulations!',
      icon: 'success',
      confirmButtonText: 'Got it!',
    });
    navigate('/pedidos', { replace: true });

  }

  }

  const handlerSumbit = (e) => {
    e.preventDefault();
    newPedido();
    console.log("info enviada", form);
  };

  return (
    <div className="container-cataadmon">
      <AdminNavBar />

          <div className="detailAdmon-newpedidos">

          <div>
          <h1>Formulario Registro Pedido</h1>
          </div>
            

            <form onSubmit={handlerSumbit}>

            <div className='newpedido_admon-numfact'>
              <input
                className="newpedido__field-panelcode"
                onChange={handlerChange}
                type="number"
                name="numfactura"
                placeholder="Numero de factura"
                required
              /></div>

              <div className='newpedido_admon-titulo'>
              <input
                className="newpedido__field-panelnombreprodc"
                onChange={handlerChange}
                type="text"
                name="nombreProducto"
                placeholder="Nombre del producto"
                required
              /></div>

              <div className='newpedido_admon-fechapedido'>
                <h3>Fecha de Pedido</h3>
                <input
                  className="newpedido__field-panelfechapedido"
                  onChange={handlerChange}
                  type="date"
                  name="fechaPedido"
                  placeholder="Fecha pedido"
                  required
                />
              </div>

              

              <div className='newpedido_admon-almacen'>
              <input
                className="newpedido__field-panelalmacen"
                onChange={handlerChange}
                type="text"
                name="almacen"
                placeholder="Almacen"
                required
              /></div>

             

              <div className='newpedido_admon-color'>
              <input
                className="newpedido__field-panelcolor"
                onChange={handlerChange}
                type="text"
                name="color"
                placeholder="Color del producto"
                required
              /></div>

<div className='newpedido_admon-fechaentrega'>
                <h3>Fecha de entrega</h3>

                <input
                  className="newpedido__field-panelfechaentrega"
                  onChange={handlerChange}
                  type="date"
                  name="fechaEntrega"
                  placeholder="Fecha de entrega"
                  required
                />
              </div>

              <div className='newpedido_admon-medidas'>
              <input
                className="newpedido__field-panelmedidas"
                onChange={handlerChange}
                type="text"
                name="medida"
                placeholder="Medida del producto"
                required
              /></div>

              <div className='newpedido_admon-especificacion'>
              <input
                className="newpedido__field-panelespecificacion"
                onChange={handlerChange}
                type="text"
                name="especificacion"
                placeholder="Especificacion de producto"
                required
              /></div>

              <div className='newpedido_admon-foto'>
              <input
                className="newpedido__field-panelfoto"
                onChange={handlerChange}
                type="text"
                name="foto"
                placeholder="Foto del producto"
                required
              /></div>

              

              <div className='newpedido_admon-asesor'>
              <input
                className="newpedido__field-panelasesor"
                onChange={handlerChange}
                type="text"
                name="asesor"
                placeholder="Asesor"
                required
              /></div>

              <div className='newpedido_admon-proveedor'>
              <input
                className="newpedido__field-panelproveedor"
                onChange={handlerChange}
                type="text"
                name="proveedor"
                placeholder="Nombre Proveedor"
                required
              /></div>

              <div className='newpedido_admon-valor'>
              <input
                className="newpedido__field-panelvalor"
                onChange={handlerChange}
                type="text"
                name="valorVenta"
                placeholder="Valor de venta"
                required
              /></div>
                <Link to="/pedidos"><button type="submit" className="admoncatalogo__regresar" >Cancelar</button></Link>
              <button className="admoncatalogo__submit" type="submit">
                Enviar Pedido
              </button>
            </form>


          </div>
        </div>
  );
}

export default NewPedido;
