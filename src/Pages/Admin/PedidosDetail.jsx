import { useEffect, useState } from 'react';
import { useParams,Link, useNavigate} from 'react-router-dom';
import {updatePedido,deletePedido} from "../../Services/Pedidos_services";
import Swal from "sweetalert2";

import "./styles/pedidoDetail.css";

import { getPedido } from '../../Services/Pedidos_services';

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';


function PedidosDetail() {
  
  const [pedido, setPedido] = useState({});
  const { _id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPedido(_id);
      setPedido(result);
    };
    fetchData();
  }, []);

  const [form, setForm] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: value});
  };

  const updaprodc = async () => {
    Swal.fire({
      title: '¿Estas seguro que deseas modificarlo?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Modificar'
  }).then((result) => {
      if (result.value) {

        updatePedido(form);

          navigate('/pedidos', { replace: true });
      }
  });
  };

  const eliminarprod = async () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No puedes deshacer esta acción",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminalo'
  }).then((result) => {
      if (result.value) {

          deletePedido(form.id);

          navigate('/pedidos', { replace: true });
      }
  });
  };

    const handlerSumbit =(e) => {
      e.preventDefault();
      
      updaprodc ();
      console.log("info enviada",form);
    };

    const handlerDelete =(e) => {
      e.preventDefault();
      
      eliminarprod();
    };


    
  return (
    <div className='container-cataadmon'>
    <AdminNavBar />
    <div className='detailAdmon-pedidos'>

    <form onSubmit={handlerSumbit}>

    <label>
    <div className='detailpedido_admon-numfact'>
      <h3>N° de Factura</h3>
    <input
        className='detailpedido__field-panelcode'
        name = "numfactura"
        value={pedido.numfactura} onChange={handlerChange}
        required
    /></div>
    </label>


    <label>
    <div className='detailpedido_admon-titulo'>
      <h3>Titulo:</h3>
    <input
        className='detailpedido__field-panelnombreprodc'
        name = "nombreProducto"
        defaultValue={pedido.nombreProducto} onChange={handlerChange}
        required
    /></div>
    </label>


    <label>
    <div className='detailpedido_admon-fechapedido'>
     <h3>Fecha de Pedido:</h3>
    
    <input
        className='detailpedido__field-panelfechapedido'
        name = "fechaPedido"
        defaultValue={pedido.fechaPedido} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-alamcen'>
    <h3>Almacen:</h3>
    
    <input
        className='detailpedido__field-panelalmacen'
        name = "almacen"
        defaultValue={pedido.almacen} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-color'>
      <h3>Color:</h3>
    
    <input
        className='detailpedido__field-panelcolor'
        name = "color"
        defaultValue={pedido.color} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-fechaentrega'>
      <h3>Fecha de Entrega:</h3>
    
    <input
        className='detailpedido__field-panelfechaentrega'
        name = "fechaEntrega"
        defaultValue={pedido.fechaEntrega} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-medidas'>
     <h3>Medidas:</h3>
    
    <input
        className='detailpedido__field-panelmedidas'
        name = "medida"
        defaultValue={pedido.medida} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-especificacion'>
      <h3>Especificacion:</h3>
    
    <input
        className='detailpedido__field-panelespecificacion'
        name = "especificacion"
        defaultValue={pedido.especificacion} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-foto'>
      <h3>Foto de Referencia</h3>
    
    <input
        className='detailpedido__field-panelfoto'
        name = "foto"
        defaultValue={pedido.foto} onChange={handlerChange}
        required
    /></div>
    </label>
    
    

    <label>
    <div className='detailpedido_admon-asesor'>
      <h3>Asesor</h3>
    
    <input
        className='detailpedido__field-panelasesor'
        name = "asesor"
        defaultValue={pedido.asesor} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-proveedor'>
      <h3>Proveedor</h3>
    
    <input
        className='detailpedido__field-panelproveedor'
        name = "proveedor"
        defaultValue={pedido.proveedor} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailpedido_admon-valor'>
      <h3>Valor:</h3>
    
    <input
        className='detailpedido__field-panelvalor'
        name = "valorVenta"
        defaultValue={pedido.valorVenta} onChange={handlerChange}
        required
    /></div>
    </label>

    <Link to="/pedidos"><button type="submit" className="admoncatalogo__regresar" >Regresar</button></Link>
    
    <button type="submit" className="admoncatalogo__submit" >Modificar</button>
        </form>

        <button type="submit" className="admoncatalogo__eliminar" onClick={handlerDelete}>Eliminar</button>

        </div>
    </div>
  )
}

export default PedidosDetail
