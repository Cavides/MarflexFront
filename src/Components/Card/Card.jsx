import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

import "./card.css";

function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = props;

  const handleClick = () => {
    navigate(`ProductDetail/${product._id}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    //navigate.push("/cart"); esto es para que no se vaya a la pagina de carrito pero manda un error en consola.
    navigate("/cart");
  };

  return (
    <div className="card">
      <h3 className="card__title">{product.title}</h3>
      <div className="card__containerImg">
        <img src={product.imagen} className="card__image" alt="Imagen del producto"/>
      </div>
      <h3 className="card__title">{product.desc}</h3>
      <h3 className="card__title">{Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(product.price)}</h3>

      <div className="card__down">
        <button type="button" className="card__button" onClick={handleClick}>
          Ver
        </button>
        <button
          type="button"
          className="card__button"
          onClick={() => handleAddToCart(product)}
        >
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape(),
};
Card.defaultProps = {
  product: {},
};

export default Card;
