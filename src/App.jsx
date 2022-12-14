import { BrowserRouter, Route, Routes} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
 
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import PasswordChange from "./Pages/Auth/PasswordChange/PasswordChange";
import ForgtPassword from "./Pages/Auth/ForgtPassWord/ForgtPassword";
import AuthCode from "./Pages/Auth/ForgtPassWord/AuthCode";
import NewPassword from "./Pages/Auth/ForgtPassWord/NewPassword";
import ErrorMessage from "./Pages/page404/Error404";

import Home from "./Pages/Home/Home";
import Products from './Pages/Products/Products';
import Contacto from './Pages/Contacto/Contacto';
import About from './Pages/About/About';
import ProductDetail  from './Pages/Products/ProductDetail/ProductDetail';



import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes/PreguntasFrecuentes";
import TyCondi from  "./Pages/TyCondi/TyCondi";
import PoliticaDevol from "./Pages/PoliticadeDevol/PoliticaDevol";
import  PoliticaDatos from "./Pages/PoliticadeDatos/PoliticaDatos";
import CoberturaEnvios from "./Pages/CoberturadeEnvios/CoberturaEnvios";
import Activation from "./Pages/Auth/Activation/Activation";
import Profile from "./Pages/Profile/Profile";
import ProfileSettings from "./Pages/Profile/ProfileSettings";

import Cart from "./Components/Cart/Cart";
import Pago from './Pages/Pago/Pago';

import Admin from "./Pages/Admin/Admin";
import CatalogoAdmin from "./Pages/Admin/CatalogoAdmin";
import Facturas from "./Pages/Admin/Facturas";
import Pedidos from "./Pages/Admin/Pedidos";
import ProductAdmon  from './Pages/Admin/ProductsDetail';
import NewProduct  from './Pages/Admin/NewProduct';
import NewPedido  from './Pages/Admin/NewPedido';
import PedidoAdmon from './Pages/Admin/PedidosDetail';
import FacturaAdmon from './Pages/Admin/FacturaDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='*' element={<ErrorMessage />} />
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='products/ProductDetail/:_id' element={<ProductDetail />} />
      <Route path='admonCatalogo/Product/:_id' element={<ProductAdmon />} />
      <Route path='pedidos/pedidoDetail/:_id' element={<PedidoAdmon />} />
      <Route path='facturas/facturaDetail/:_id' element={<FacturaAdmon />} />
      <Route path='/newproduct' element={<NewProduct/>} />
      <Route path='/faq' element={<PreguntasFrecuentes />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/about' element={<About />} />
      <Route path='/terminosycondiciones' element={<TyCondi />} />
      <Route path='/politicadedevolucion' element={<PoliticaDevol />} />
      <Route path='/politicadedatos' element={<PoliticaDatos />} />
      <Route path='/coberturaenvios' element={<CoberturaEnvios />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgetpassword' element={<ForgtPassword />} />
      <Route path='/authcode' element={<AuthCode />} />
      <Route path='/newpassword' element={<NewPassword />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pago' element={<Pago />} />
      <Route path='/activation' element={<Activation />} />
      <Route path='/admon' element={<Admin/>} />
      <Route path='/admonCatalogo' element={<CatalogoAdmin/>} />
      <Route path='/facturas' element={<Facturas/>} />
      <Route path='/pedidos' element={<Pedidos/>} />
      <Route path='/newpedido' element={<NewPedido/>} />
      <Route path='/profile/:name' element={<Profile />} />
      <Route path='/profile-settings/:name' element={<ProfileSettings />} />
      <Route path='/reset-password/:resetToken' element={<PasswordChange />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
