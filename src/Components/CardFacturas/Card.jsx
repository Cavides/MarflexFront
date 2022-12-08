import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


import "./card.css";

function Card(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`facturaDetail/${factura._id}`);
  };

  const { factura } = props;



  return (
    <div className="facturacard">
      <h3 className="facturacard__title"><a>Numero de Factura:</a> {factura._id}</h3>
      <h3 className="facturacard__title"><a>Fecha de Facturacion: </a>{factura.createdAt}</h3>
      <h3 className="facturacard__title"><a>Comprador:</a> {factura.name} {factura.lastName}</h3>
      <h3 className="facturacard__title"><a>Documento:</a> {factura.doc}</h3>
      <h3 className="facturacard__title"><a>Departamento:</a> {factura.departamento}</h3>
       <h3 className="facturacard__title"><a>Ciudad:</a> {factura.ciudad}</h3>
       <h3 className="facturacard__title"><a>Total venta:</a> {factura.total}</h3>

       <div className="card__down">
        <button type="button" className="card__button" onClick={handleClick}>
          Detalle
        </button>
      </div>

      
    </div>
  );
}

Card.propTypes = {
  factura: PropTypes.shape(),
};
Card.defaultProps = {
  factura: {},
};

export default Card;
