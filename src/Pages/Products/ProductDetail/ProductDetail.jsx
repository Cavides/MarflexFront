import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import "./productDetail.css";
import Header from "../../../Components/Header/Header";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import { getProduct } from '../../../Services/Products_services';

import { addToCart } from "../../../slices/cartSlice";

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    //navigate.push("/cart"); esto es para que no se vaya a la pagina de carrito pero manda un error en consola.
    navigate("/cart");
  };

  const handleComprar = (product) =>{
    dispatch(addToCart(product));
    navigate("/pago");
  }

  return (
    <div>
    <Header />
    <Navbar />
    <div className='detail'>
      <h1 className='detail__title'>{`${product.title}`}</h1>
      <div className='detail__info'>
        <div className='detail__imgContainer'>
          <img className='detail__img' src={product.imagen} />
        </div>
        <div className='detail__text'>
          <h3 className='detail__category'>Categoria : {product.category}</h3>
          <p className='detail__description'>{product.descripcion}</p>
          <div className='detail__down'>
            <h3 className='detail__price'>Precio : {`$${product.price}`}</h3>
          </div>
          <div className='detail__button'>
          <button type="button" className="card__buttondetail" onClick={() => handleComprar(product)}>Comprar</button>
          <button type="button" className="card__buttondetail" onClick={() => handleAddToCart(product)}>Agregar a Carrito</button> 
          </div>
        </div> 
      </div>
    </div>
    <div className='detail__extra'>
      <ul>
      <li><h3 className='detail__extrainfo'>Medidas : {`${product.medidas}`}</h3></li>
      <li><h3 className='detail__extrainfo'>Codigo : {`${product.code}`}</h3></li>
      <li><h3 className='detail__extrainfo'>Material: {`${product.material}`}</h3></li>
      <li><h3 className='detail__extrainfo'>Garatia: {`${product.garantia}`}</h3></li>
      <li><h3 className='detail__extrainfo'>Armado: {`${product.armado}`}</h3></li>
      <li><h3 className='detail__extrainfo'>Recomendaciones: {`${product.recomendaciones}`}</h3></li>
      </ul>
      </div>


    <Footer/>
    </div>
  );
}

export default Detail;