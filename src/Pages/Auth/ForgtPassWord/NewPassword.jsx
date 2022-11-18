import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./changepassword.css";



function NewPassword() {

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
    <div className="main-container_newpass">
      <div className="forgtPassword-form">
        <div className="forgtPassword-form__title">
          <h4>Cambiar Contraseña</h4>
        </div>


        <form onSubmit={handlerSumbit}>
          {/* NewPassword */}
          <div className="forgtPassword-form__field">
            <label htmlFor="password">
              <b>Contraseña nueva</b>
              <input
                className="forgtPassword-form__field-panel" onChange={handlerChange}
                type="password"
                name="newPass"
                placeholder="Ingresa tu nueva contraseña"
                required
              />
            </label>
          </div>
          {/* RNewPassword */}
          <div className="forgtPassword-form-form__field">
            <label htmlFor="password">
              <b>Confirmar nueva contraseña</b>
              <input
                className="forgtPassword-form__field-panel" onChange={handlerChange}
                type="password"
                name="rNewPass"
                placeholder="Repite tu nueva contraseña"
                required
              />
            </label>
          </div>
        

        {/* button aceptar */}
        <button className="forgtPassword-form__cancelar"><Link className= 'navBar__navLink' to='/login'>Cancelar</Link></button>

        {/* buttton cancelar */}
        <button className="forgtPassword-form__submit">Cambiar</button>
        </form>
      </div>
      
    </div>
  );
}

export default NewPassword;
