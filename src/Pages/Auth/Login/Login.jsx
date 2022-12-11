import React,{useState} from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { profileSlice, setProfile } from '../../../Store/profileSlice';
import { login } from '../../../Services/Auth';

import "./Login.css";

const logo = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await login(form.email, form.password);
    const { profile, jwtoken, message} = response;

    console.log(profile,jwtoken,message);

    if (profile) {
      dispatch(setProfile(profile));
      localStorage.setItem('token', jwtoken);
      localStorage.setItem('profile', JSON.stringify(profile));
      Swal.fire({
        title: 'Bienvenido',
        text: `Disfrute de su estancia`,
        icon: 'success',
        confirmButtonText: `Let's go!`,
      });
      navigate(`/`);
    } else {
      Swal.fire({
        title: message, 
        text: 'Please, check that the introduced credentials are correct.',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
    }
  };

  // funciones para formulario

const [form, setForm] = useState({});

const handlerChange = (event) => {
  const key = event.target.name;
  const value = event.target.value;
  setForm({...form, [key]: value});
};

  const handlerSumbit = (e) => {
    e.preventDefault();
    fetchData();
    console.log("info enviada",form);
  };

  return (
    <div className="main-container">
      <br />
      <br />
      <div className="logoMarflex">
      <Link className= 'navBar__navLink' to='/'><img src={logo} alt="Logo de la empresa Marflex"/></Link>
      </div>
      <div className="log-form">
        {/* title */}
        <div className="log-form__title">Ingreso</div>

        <form onSubmit = {handlerSumbit}>
          {/* email */}
          <div className="log-form__field">
            <label htmlFor="email">
              <input
                className="log-form__field-panel" onChange={handlerChange}
                type="email"
                name="email"
                placeholder="Ingresa tu email"
              />
            </label>
          </div>

          <div className="log-form__field">
            {/* password */}
            <label htmlFor="password">
              <input
                className="log-form__field-panel" onChange={handlerChange}
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
            </label>
          </div>
           {/* submit */}
        <button type="submit" className="log-form__submit" >Login</button>
        </form>

        {/* forgotPassword */}
        <div className="log-form__forgotpassword">
          <h4><Link className= 'navBar__navLinkAuth' to='/forgetpassword'>¿Olvidaste tu contraseña?</Link></h4>
        </div>

        {/* registration */}
        <div className="log-form__register">
          <h5><Link className= 'navBar__navLinkAuth' to='/register'>¿No tienes cuenta?</Link></h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
