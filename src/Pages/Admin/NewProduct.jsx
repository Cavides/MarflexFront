import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";
import {createProduct, getProductByCode} from "../../Services/Products_services";
import Swal from 'sweetalert2';

import "./styles/newProducts.css"

function NewProdruct() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [key]: value });
  };


  const newProduct = async () =>{

    const product = await getProductByCode(form.code);
    
    if (product.code) {
      Swal.fire({
        title: 'This code is already in use!',
        text: 'Please enter a different code.',
        icon: 'warning',
        confirmButtonText: 'Got it!',
      });
  }else{
    const response = await createProduct(form);
    Swal.fire({
      title: 'Your product has been created!',
      text: 'Congratulations!',
      icon: 'success',
      confirmButtonText: 'Got it!',
    });
    navigate('/admonCatalogo', { replace: true });

  }
}

  const handlerSumbit = (e) => {
    e.preventDefault();
    newProduct();
    console.log("info enviada", form);
  };



  return (
    <div className="container-cataadmon">
      <AdminNavBar />

      <div className='newAdmon'>

      <div className="newadmon-titlepage">
        <h1>Agregar Producto</h1>
      </div>

      <form onSubmit={handlerSumbit}>
      <div className='newprod_admon'>
        <input
          className="newprod__field-panelcode" onChange={handlerChange}
          type="number"
          name="code"
          placeholder="Codigo"
          required
        /></div>

        <div className='newprod_admon-titulo'>
        <input
          className="newprod__field-paneltitle" onChange={handlerChange}
          type="text"
          name="title"
          placeholder="Nombre del Producto"
          required
        /></div>

        <div  className='newprod_admon-tipo'>
        <input
          className="newprod__field-paneltype" onChange={handlerChange}
          type="text"
          name="type"
          placeholder="Tipo"
          required
        /></div>

        <div className='newprod_admon-categoria'>
        <input
          className="newprod__field-panelcategory" onChange={handlerChange}
          type="text"
          name="category"
          placeholder="Categoria"
          required
        />
        </div>

        <div className='newprod_admon-resumen'>
        <input
          className="newprod__field-paneldesc" onChange={handlerChange}
          type="text"
          name="desc"
          placeholder="Resumen"
          required
        /></div>

        <div className='newprod_admon-medidas'>
        <input
          className="newprod__field-panelmedidas" onChange={handlerChange}
          type="text"
          name="medidas"
          placeholder="Medidas"
          required
        />
        </div>

        <div className='newprod_admon-material'>
        <input
          className="newprod__field-panelmaterial" onChange={handlerChange}
          type="text"
          name="material"
          placeholder="Material"
          required
        /></div>

        <div className='newprod_admon-descripcion'>
        <input
          className="newprod__field-paneldescripcion" onChange={handlerChange}
          type="text"
          name="descripcion"
          placeholder="Descripci??n"
          required
        /></div>

        <div  className='newprod_admon-precio'>
        <input
          className="newprod__field-panelprecio" onChange={handlerChange}
          type="number"
          name="price"
          placeholder="Valor del proudcto"
          required
        /></div>
        
        <div className='newprod_admon-garantia'>
        <input
          className="newprod__field-panelgarantia" onChange={handlerChange}
          type="text"
          name="garantia"
          placeholder="Tiempo de Garantia"
          required
        /></div>

        <div className='newprod_admon-armado'>
        <input
          className="newprod__field-panelarmado" onChange={handlerChange}
          type="text"
          name="armado"
          placeholder="??Requiere armado?"
          required
        /></div>

        <div className='newprod_admon-recomendaciones'>
        <input
          className="newprod__field-panelrecomendaciones" onChange={handlerChange}
          type="text"
          name="recomendaciones"
          placeholder="Recomendaciones"
          required
        /></div>
        <div className='newprod_admon-imagen'>
        <input
          className="newprod__field-panelimg" onChange={handlerChange}
          type="text"
          name="imagen"
          placeholder="Link de la imagen del producto"
          required
        />
        </div>

        <button className="admoncatalogo__submit" type="submit">
          Agregar Producto
        </button>
      </form>

      <Link to="/admonCatalogo"><button className="admoncatalogo__cancelar" type="submit">
          Cancelar
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NewProdruct;
