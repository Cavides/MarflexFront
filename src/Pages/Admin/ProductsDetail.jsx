import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import "./styles/productDetail.css";

import { getProduct } from '../../Services/Products_services';

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';

function Detail() {
  const [product, setProduct] = useState({});
  const { _id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      console.log("info enviada",form);
    };

  return (
    <div>
    <AdminNavBar />
    <div className='detail'>
    <form onSubmit={handlerSumbit}>

    <label>
    <input
        className='Proudct-title'
        name = "code"
        value={product.code} onChange={handlerChange}
        required
    />
    </label>


    <label>
    <input
        className='Proudct-title'
        name = "title"
        value={product.title} onChange={handlerChange}
        required
    />
    </label>


    <label>
    <input
        className='Proudct-title'
        name = "type"
        value={product.type} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "category"
        value={product.category} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "desc"
        value={product.desc} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "descripcion"
        value={product.descripcion} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "price"
        value={product.price} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "medidas"
        value={product.medidas} onChange={handlerChange}
        required
    />
    </label>
    
    <label>
    <input
        className='Proudct-title'
        name = "material"
        value={product.material} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "garantia"
        value={product.garantia} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "armado"
        value={product.armado} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "recomendaciones"
        value={product.recomendaciones} onChange={handlerChange}
        required
    />
    </label>

    <label>
    <input
        className='Proudct-title'
        name = "imagen"
        value={product.imagen} onChange={handlerChange}
        required
    />
    </label>
    
    

        </form>
        </div>
    </div>
  );
}

export default Detail;