import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./forgtpassword.css";

function ForgtPassword() {

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
    <div className="main-container_forget">
      <div className="forgtPassword-form">
        {/* title */}
        <div className="forgtPassword-form__title">
          <h2>
            <b>Recupera tu cuenta</b>
          </h2>
        </div>

        {/* text */}
        <div className="forgtPassword-form__text">
          <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
        </div>

        {/* email-field */}
        <form className="forgtPassword-form__field" onSubmit = {handlerSumbit}>
          <label htmlFor="email">
            <input
              className="forgtPassword-form__field-panel" onChange={handlerChange}
              type="text"
              name="email"
              placeholder="Ingresa tu email"
            />
          </label>
          <button className="forgtPassword-form__cancelar"><Link className= 'navBar__navLink' to='/login'>Cancelar</Link></button>
           {/* buttton cancelar */}
        <button className="forgtPassword-form__submit">Buscar</button>
        </form>
 
      </div>
    </div>
  );
}

export default ForgtPassword;
