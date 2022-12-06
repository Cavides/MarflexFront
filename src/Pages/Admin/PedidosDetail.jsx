import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {updatePedido,deletePedido} from "../../Services/Pedidos_services";


import "./styles/pedidoDetail.css";

import { getPedido } from '../../Services/Pedidos_services';

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';


function PedidosDetail() {
  
  const [pedido, setPedido] = useState({});
  const { _id } = useParams();

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

    const handlerSumbit =(e) => {
      e.preventDefault();
      updatePedido(form);
      console.log("info enviada",form);
    };

    const handlerDelete =(e) => {
      e.preventDefault();
      deletePedido();
    };


    
  return (
    <div>
    <AdminNavBar />
    <div className='detailAdmon-Pedidos'>

    <form onSubmit={handlerSumbit}>

    <label>
    <div className='detailprod_admon'>
      Numero de Factura:
    </div>
    <input
        className='Proudct-title'
        name = "numfactura"
        defaultValue={pedido.numfactura} onChange={handlerChange}
        required
    />
    </label>


    <label>
    <div className='detailprod_admon'>
      Titulo:
    </div>
    <input
        className='Proudct-title'
        name = "nombreProducto"
        defaultValue={pedido.nombreProducto} onChange={handlerChange}
        required
    />
    </label>


    <label>
    <div className='detailprod_admon'>
      Fecha de Pedido:
    </div>
    <input
        className='Proudct-title'
        name = "fechaPedido"
        defaultValue={pedido.fechaPedido} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
    Almacen:
    </div>
    <input
        className='Proudct-title'
        name = "almacen"
        defaultValue={pedido.almacen} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Color
    </div>
    <input
        className='Proudct-title'
        name = "color"
        defaultValue={pedido.color} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
     Medidas:
    </div>
    <input
        className='Proudct-title'
        name = "medida"
        defaultValue={pedido.medida} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Especificacion:
    </div>
    <input
        className='Proudct-title'
        name = "especificacion"
        defaultValue={pedido.especificacion} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Foto de Referencia
    </div>
    <input
        className='Proudct-title'
        name = "foto"
        defaultValue={pedido.foto} onChange={handlerChange}
        required
    />
    </label>
    
    <label>
    <div className='detailprod_admon'>
      Fecha de Entrega:
    </div>
    <input
        className='Proudct-title'
        name = "fechaEntrega"
        defaultValue={pedido.fechaEntrega} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Asesor
    </div>
    <input
        className='Proudct-title'
        name = "asesor"
        defaultValue={pedido.asesor} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Proveedor
    </div>
    <input
        className='Proudct-title'
        name = "proveedor"
        defaultValue={pedido.proveedor} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Valor:
    </div>
    <input
        className='Proudct-title'
        name = "valorVenta"
        defaultValue={pedido.valorVenta} onChange={handlerChange}
        required
    />
    </label>
    
    <button type="submit" className="admon__submit" >Modificar</button>
        </form>

        <button type="submit" className="admon__submit" onClick={handlerDelete}>Eliminar</button>

        </div>
    </div>
  )
}

export default PedidosDetail
