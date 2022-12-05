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

    const handlerDelete =(e) => {
      e.preventDefault();
      deleteProduct();
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
        defaultValue={product.code} onChange={handlerChange}
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
        defaultValue={product.title} onChange={handlerChange}
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
        defaultValue={product.type} onChange={handlerChange}
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
        defaultValue={product.category} onChange={handlerChange}
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
        defaultValue={product.desc} onChange={handlerChange}
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
        defaultValue={product.descripcion} onChange={handlerChange}
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
        defaultValue={product.price} onChange={handlerChange}
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
        defaultValue={product.medidas} onChange={handlerChange}
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
        defaultValue={product.material} onChange={handlerChange}
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
        defaultValue={product.garantia} onChange={handlerChange}
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
        defaultValue={product.armado} onChange={handlerChange}
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
        defaultValue={product.recomendaciones} onChange={handlerChange}
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
        defaultValue={product.imagen} onChange={handlerChange}
        required
    />
    </label>
    
    <button type="submit" className="admon__submit" >Modificar</button>
        </form>

        <button type="submit" className="admon__submit" onClick={handlerDelete}>Eliminar</button>

        </div>
    </div>
  );
}

export default Detail;