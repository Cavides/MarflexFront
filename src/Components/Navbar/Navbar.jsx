import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return(
    <div className="nav">
      <ul className="nav__menu">
        <li className="nav__item"> <NavLink className= 'navBar__navLink' to='/'>Home</NavLink></li>
        <li className="nav__item"><NavLink className= 'navBar__navLink' to='/products'>Productos</NavLink></li>
        <li className="nav__item"><NavLink className= 'navBar__navLink' to='/faq'>FAQ</NavLink></li>
        <li className="nav__item"><NavLink className= 'navBar__navLink' to='/contacto'>Contacto</NavLink></li>
        <li className="nav__item"><NavLink className= 'navBar__navLink' to='/about'>Nosotros</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;
