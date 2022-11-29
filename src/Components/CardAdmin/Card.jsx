import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";



import "./card.css";

function Card(props) {
  const navigate = useNavigate();
  const { product } = props;

  const handleClick = () => {
    navigate(`Product/${product._id}`, { replace: true });
  };

  return (
    <div className="card">
      <h3 className="card__title">{product.title}</h3>
      <div className="card__containerImg">
        <img src={product.imagen} className="card__image" alt="Imagen del producto"/>
      </div>
      <h3 className="card__title">{product.desc}</h3>
      <h3 className="card__title">${product.price}</h3>

      <div className="card__down">
        <button type="button" className="card__button" onClick={handleClick}>
          Ver
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
