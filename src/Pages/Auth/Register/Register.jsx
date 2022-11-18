import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUser,getUserByEmail,} from "../../../Services/User_services";
import Swal from 'sweetalert2';
import "./register.css";


const logo = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";

function Register() {

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const newUser = async () => {
    const user = await getUserByEmail(form.email);
    

    if (user.email) {
      Swal.fire({
        title: 'This email is already in use!',
        text: 'Please enter a different email.',
        icon: 'warning',
        confirmButtonText: 'Got it!',
      });
    } else if (form.password !== form.rPassword) {
      Swal.fire({
        title: 'Password and confirm password are different!',
        text: 'Password and confirm password must match.',
        icon: 'warning',
        confirmButtonText: 'Got it!',
      });
    } else {
      const res = await createUser(form);
      if (res.details) {
        if (res.details[0].message.includes('password')) {
          res.details[0].message = `Password needs to be at least 6 characters long and include only alphanumeric!`;
        }
        Swal.fire({
          title: res.details[0].message,
          icon: 'warning',
          confirmButtonText: 'Got it!',
        });
        return;
      }
      Swal.fire({
        title: 'Your account has been created!',
        text: 'Congratulations!',
        icon: 'success',
        confirmButtonText: 'Got it!',
      });

      navigate('/', { replace: true });
    }
  };
 

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: value});
  };

    const handlerSumbit =(e) => {
      e.preventDefault();
      newUser();
      console.log("info enviada",form);
    };

  return (
    <div className="main-container">
      <div className="regoMarflex">
      <Link className= 'navBar__navLink' to='/'><img src={logo} alt="Logo de la empresa Marflex"/></Link>
      </div>
      <div className="reg-form">
        {/* title */}
        <div className="reg-form__title">Registro de Usuario</div>

        <form onSubmit={handlerSumbit}>
          {/* primer nombre */}
          <div className="reg-form__field">
            <label htmlFor="text">
              <input
                className="reg-form__field-panel"
                type="text"
                name="name"
                placeholder="Ingresa tu primer nombre" onChange={handlerChange}
                required
              />
            </label>
          </div>

          {/* primer apellido*/}
          <div className="reg-form__field">
            <label htmlFor="text">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="text"
                name="lastName"
                placeholder="Ingresa tu primer apellido"
                required
              />
            </label>
          </div>

          {/* email */}
          <div className="reg-form__field">
            <label htmlFor="email">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="email"
                name="email"
                placeholder="Ingresa tu email"
                required
              />
            </label>
          </div>

          <div className="reg-form__field">
            {/* password */}
            <label htmlFor="password">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="password"
                name="password"
                placeholder="Ingresa contraseña"
                required
              />
            </label>
          </div>

          <div className="reg-form__field">
            {/* repeat password */}
            <label htmlFor="password">
              <input
                className="reg-form__field-panel" onChange={handlerChange}
                type="password"
                name="rPassword"
                placeholder="Repite contraseña"
                required
              />
            </label>
          </div>
           {/* submit */}
        <button type="submit" className="reg-form__submit">Registrarse</button>
        </form>

        {/* No soy un robot */}

        {/* regin */}
        <div className="reg-form__login">
          <h5><Link className= 'navBar__navLinkAuth' to='/login'>¿Ya tienes cuenta?</Link></h5>
        </div>
      </div>
    </div>
  );
}

export default Register;
