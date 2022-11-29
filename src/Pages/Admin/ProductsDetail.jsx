import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {updateProduct,deleteProduct} from "../../Services/Products_services";


import "./styles/productDetail.css";

import { getProduct } from '../../Services/Products_services';

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';

function Detail() {
  const [product, setProduct] = useState({});
  const { _id } = useParams();



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

    const handlerSumbit =(e) => {
      e.preventDefault();
      updateProduct(form);
      console.log("info enviada",form);
    };

  return (
    <div>
    <AdminNavBar />
    <div className='detailAdmon'>

    <form onSubmit={handlerSumbit}>

    <label>
    <div className='detailprod_admon'>
      Code:
    </div>
    <input
        className='Proudct-title'
        name = "code"
        value={product.code} onChange={handlerChange}
        required
    />
    </label>


    <label>
    <div className='detailprod_admon'>
      Titulo:
    </div>
    <input
        className='Proudct-title'
        name = "title"
        value={product.title} onChange={handlerChange}
        required
    />
    </label>


    <label>
    <div className='detailprod_admon'>
      Tipo:
    </div>
    <input
        className='Proudct-title'
        name = "type"
        value={product.type} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
     Categoria:
    </div>
    <input
        className='Proudct-title'
        name = "category"
        value={product.category} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Resumen:
    </div>
    <input
        className='Proudct-title'
        name = "desc"
        value={product.desc} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Descripcion:
    </div>
    <input
        className='Proudct-title'
        name = "descripcion"
        value={product.descripcion} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Precio:
    </div>
    <input
        className='Proudct-title'
        name = "price"
        value={product.price} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Medidas:
    </div>
    <input
        className='Proudct-title'
        name = "medidas"
        value={product.medidas} onChange={handlerChange}
        required
    />
    </label>
    
    <label>
    <div className='detailprod_admon'>
      Material:
    </div>
    <input
        className='Proudct-title'
        name = "material"
        value={product.material} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Garantia:
    </div>
    <input
        className='Proudct-title'
        name = "garantia"
        value={product.garantia} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Armado:
    </div>
    <input
        className='Proudct-title'
        name = "armado"
        value={product.armado} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Recomendaciones:
    </div>
    <input
        className='Proudct-title'
        name = "recomendaciones"
        value={product.recomendaciones} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <div className='detailprod_admon'>
      Imagen:
    </div>
    <div className='detailprod_img'>
      <img src={product.imagen} alt="imagen del producto"/>
    </div>
    <input
        className='Proudct-title'
        name = "imagen"
        value={product.imagen} onChange={handlerChange}
        required
    />
    </label>
    
    <button type="submit" className="admon__submit" >Modificar</button>
        </form>

        <button type="submit" className="admon__submit" >Eliminar</button>

        </div>
    </div>
  );
}

export default Detail;