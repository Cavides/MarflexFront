import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../../slices/cartSlice";

import Swal from "sweetalert2";

import { createFactura } from "../../Services/Factura_services";

import { Link, useNavigate } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./pago.css";

const ubicacion = [
  {
    departamento: "Antioquia",
    ciudades: [
      "San Antonio De Pereira",
      "Apartadó",
      "Barbosa",
      "Bello",
      "Caldas",
      "Carepa",
      "Carmen De Viboral",
      "Caucasia",
      "Chigorodo",
      "Copacabana",
      "Currulao",
      "El Reposo Zona Uraba",
      "El Retiro, El Totumo",
      "El Totumo Zona Uraba",
      "El Tres Zona Uraba",
      "Envigado, Girardota",
      "Guarne, Itagüí",
      "La Ceja, La Estrella",
      "La Tablaza, La Unión, Marinilla",
      "Medellín, Necoclí",
      "Nueva Colonia Zona Uraba",
      "Rionegro, Sabaneta",
      "San Antonio De Prado",
      "San Cristobal",
      "Santa Elena",
      "Santuario",
      "Turbo",
      "Yondó",
    ],
  },{
    "departamento":"Bolivar",
    "ciudades":["Arjona", "Bayunca", "Calamar", "Cartagena", "Clemencia", "La Boquilla", "Magangué", "Mamonal", "Manzanillo Del Mar", "Pasacaballos", "Pontezuela", "Punta Canoa", "Santa Catalina", "Santa Rosa De Lima", "Turbaco, Yati"]
  }
];

const imgpago =
  "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626273/imagenes/pago_sym54q.png";

function Pago() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const [factura, setFactura] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFactura({ ...factura, [key]: value });
  };

  const newFactura = async () => {
    Swal.fire({
      title: "Pago Exitoso!",
      text: "El pago de tus productos fue procesado exitosamente.",
      icon: "success",
      confirmButtonText: "Got it!",
    });
    await createFactura(factura);
    navigate("/", { replace: true });
  };

  const handlerSumbit = (e) => {
    e.preventDefault();
    newFactura();
    dispatch(clearCart());
    console.log("info enviada", factura);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="all-container">
        <div className="main-containerPago">
          <div className="pago-form">
            {/* title */}
            <div className="pago-form__title">Pago de Productos</div>

            <div className="pago-form__subtitle">Información del comprador</div>
            <form onSubmit={handlerSumbit}>
              {/* primer nombre */}
              <div className="pago-form__field">
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                  />
                </label>
              </div>

              {/* primer apellido*/}
              <div className="pago-form__field">
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    required
                  />
                </label>
              </div>

              {/* numero de identificacion*/}
              <div className="pago-form__field">
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="number"
                    name="doc"
                    placeholder="Ingresa tu numero de identificacion"
                  />
                </label>
              </div>

              {/* email */}
              <div className="pago-form__field">
                <label htmlFor="email">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* telefono */}
                <label htmlFor="number">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="number"
                    name="telephone"
                    placeholder="Ingresa numero de telefono"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* Departamento */}
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="option"
                    name="departamento"
                    placeholder="Departamento"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* Departamento */}
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* Direccion */}
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="text"
                    name="direccion"
                    placeholder="Direccion de entrega"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* Descripcion*/}
                <label htmlFor="text">
                  <input
                    className="pago-form__field-panel"
                    onChange={handlerChange}
                    type="text"
                    name="descripcion"
                    placeholder="Descripción adicional"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__subtitle">Información de pago</div>

              <div className="pago-form__image">
                <img src={imgpago} alt="Formas de pago " />
              </div>

              <div className="pago-form__field">
                {/* nombre de tarjeta*/}
                <label htmlFor="textr">
                  <input
                    className="pago-form__field-panel"
                    type="text"
                    name="nombtarjeta"
                    placeholder="Nombre del propietario"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* numero de tarjeta*/}
                <label htmlFor="number">
                  <input
                    className="pago-form__field-panel"
                    type="number"
                    name="numerotarjeta"
                    placeholder="Numero de la tarjeta"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* nombre de tarjeta*/}
                <label htmlFor="date">
                  <input
                    className="pago-form__field-panel"
                    type="month"
                    name="Fechatar"
                    placeholder="Fecha de vencimiento"
                    required
                  />
                </label>
              </div>

              <div className="pago-form__field">
                {/* nombre de tarjeta*/}
                <label htmlFor="number">
                  <input
                    className="pago-form__field-panel"
                    type="number"
                    name="CVC"
                    placeholder="CVC"
                    required
                  />
                </label>
              </div>
              {/* buttton cancelar */}
              <Link to="/">
                <button className="pago-form__cancelar">Cancelar</button>
              </Link>

              {/* buttton comprar */}
              <button type="submit" className="pago-form__comprar">
                Comprar
              </button>
            </form>
          </div>
        </div>

        <div className="pago-form__products">
          <div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div
                    className="cart-item"
                    name="products"
                    value={cartItem.id}
                    key={cartItem.code}
                  >
                    <div className="cart-product">
                      <img src={cartItem.imagen} alt={cartItem.title} />
                      <div>
                        <h3>{cartItem.title}</h3>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price} </div>
                    <div className="cart-product-quantity">
                      <div className="counter"> x {cartItem.cartQuantity}</div>
                    </div>
                    <div className="cart-product-total-price">
                      {Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                      }).format(cartItem.price * cartItem.cartQuantity)}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Total</span>
                  <span className="amount" name="total">
                    {Intl.NumberFormat("es-CO", {
                      style: "currency",
                      currency: "COP",
                    }).format(cart.cartTotalAmount)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pago;
