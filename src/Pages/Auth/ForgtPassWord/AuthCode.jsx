import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./forgtpassword.css";

function AuthCode() {

  const [form, setForm] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: value});
  };

    const handlerSumbit = (e) => {
      e.preventDefault();
      console.log("info enviada",form);
    };

  return (
    <div>
      <div className="main-container">
        <div className="forgtPassword-form">
          {/* title */}
          <div className="forgtPassword-form__title">
            <h2>
              <b>Recuperación de cuenta</b>
            </h2>
          </div>

          {/* text */}
          <div className="forgtPassword-form__textcode">
            <p>
              Ingresa el código que fue enviado a tu correo electrónico para
              saber que es tu cuenta.
            </p>
          </div>

          {/* code-field */}
          <form onSubmit = {handlerSumbit}>
          <div className="forgtPassword-form__code">
            <label htmlFor="number">
              <input
                className="forgtPassword-form__field-panel"  onChange={handlerChange}
                type="number"
                name="codigo"
                placeholder="Ingresa el código"
                required
              />
            </label>
          </div>

          {/* button aceptar */}
          <button className="forgtPassword-form__cancelar"><Link className= 'navBar__navLink' to='/forgetpassword'>Atras</Link></button>

          {/* buttton cancelar */}
          <button className="forgtPassword-form__submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthCode;
