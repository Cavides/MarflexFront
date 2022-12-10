import { useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';
import {updateProduct,deleteProduct} from "../../Services/Products_services";
import Swal from 'sweetalert2';


import "./styles/productDetail.css";

import { getProduct } from '../../Services/Products_services';

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';

function Detail() {
  const [product, setProduct] = useState({});
  const { _id } = useParams();

  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(_id);
      setProduct(result);
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

        updateProduct(_id,form);

          navigate('/admonCatalogo', { replace: true });
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

          deleteProduct(_id);

          navigate('/admonCatalogo', { replace: true });
      }
  });
  };

    const handlerSumbit =(e) => {
      e.preventDefault();
      updaprodc();
      console.log("info enviada",form);
    };

    const handlerDelete =(e) => {
      e.preventDefault();
      eliminarprod();
    };

  return (
    <div className='container-cataadmon'>
    <AdminNavBar />
    <div className='detailAdmon'>

    <form onSubmit={handlerSumbit}>

    <label>
    <div className='detailprod_admon'>
      <h3>Code:</h3>
    
    <input
        className='detailprod__field-panelcode'
        name = "code"
        value={product.code} onChange={handlerChange}
        required
    /></div>
    </label>


    <label>
    <div className='detailprod_admon-titulo'>
      <h3>Titulo:</h3>
    
    <input
        className='detailprod__field-paneltitle'
        name = "title"
        defaultValue={product.title} onChange={handlerChange}
        required
    /></div>
    </label>


    <label>
    <div className='detailprod_admon-tipo'>
      <h3>Tipo:</h3>
    
    <input
        className='detailprod__field-paneltype'
        name = "type"
        defaultValue={product.type} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-categoria'>
     <h3>Categoria:</h3>
    
    <input
        className='detailprod__field-panelcategory'
        name = "category"
        defaultValue={product.category} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-resumen'>
      <h3>Resumen:</h3>
    
    <input
        className='detailprod__field-paneldesc'
        name = "desc"
        defaultValue={product.desc} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-medidas'>
      <h3>Medidas:</h3>
    
    <input
        className='detailprod__field-panelmedidas'
        name = "medidas"
        defaultValue={product.medidas} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-material'>
      <h3>Material:</h3>
    
    <input
        className='detailprod__field-panelmaterial'
        name = "material"
        defaultValue={product.material} onChange={handlerChange}
        required
    />
    </div>
    </label>

    <label>
    <div className='detailprod_admon-descripcion'>
      <h3>Descripcion:</h3>
    
    <input
        className='detailprod__field-paneldescripcion'
        name = "descripcion"
        defaultValue={product.descripcion} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-precio'>
      <h3>Precio:</h3>
    
    <input
        className='detailprod__field-panelprecio'
        name = "price"
        defaultValue={product.price} onChange={handlerChange}
        required
    /></div>
    </label>

    
    
    

    <label>
    <div className='detailprod_admon-garantia'>
      <h3>Garantia:</h3>
    
    <input
        className='detailprod__field-panelgarantia'
        name = "garantia"
        defaultValue={product.garantia} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-armado'>
      <h3>Armado:</h3>
    
    <input
        className='detailprod__field-panelarmado'
        name = "armado"
        defaultValue={product.armado} onChange={handlerChange}
        required
    /></div>
    </label>

   

    <label>
    <div className='detailprod_admon-imagen'>
      <h3>Imagen:</h3>
    
    <div className='detailprod_img'>
      <img src={product.imagen} alt="imagen del producto"/>
    </div>
    
    <input
        className='detailprod__field-panelimg'
        name = "imagen"
        defaultValue={product.imagen} onChange={handlerChange}
        required
    /></div>
    </label>

    <label>
    <div className='detailprod_admon-recomendaciones'>
      <h3>Recomendaciones:</h3>
    
    <input
        className='detailprod__field-panelrecomendaciones'
        name = "recomendaciones"
        defaultValue={product.recomendaciones} onChange={handlerChange}
        required
    /></div>
    </label>

    <Link to="/admonCatalogo"><button type="submit" className="admoncatalogo__regresar" >Regresar</button></Link>
    
    <button type="submit" className="admoncatalogo__submit" >Modificar</button>
        </form>

        <button type="submit" className="admoncatalogo__eliminar" onClick={handlerDelete}>Eliminar</button>

        </div>
    </div>
  );
}

export default Detail;