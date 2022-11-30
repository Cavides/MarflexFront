import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import "./card.css";

function Card(props) {
  const navigate = useNavigate();
 

  const { pedido } = props;

  const handleClick = () => {
    navigate(`pedidoDetail/${pedido._id}`);
  };


  return (
    <div className="card">
      <h3 className="card__title">{pedido.nombreProducto}</h3>
      <h3 className="card__title">{pedido.fechaEntrega}</h3>
      <h3 className="card__title">{pedido.medida}</h3>
      <h3 className="card__title">${pedido.valorVenta}</h3>

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
