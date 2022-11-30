import React,{useState} from "react";
import AdminNavBar from "../../Components/AdminNavbar/AdminNavBar";

function NewProdruct() {

  const [form, setForm] = useState({});

  const handlerChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: value});
  };

    const handlerSumbit =(e) => {
      e.preventDefault();
      console.log("info enviada",form);
    };

  return (
    <div>
      <AdminNavBar />

    <form onSubmit={handlerSumbit}>
    <input className="newProduct_formulario" type="number" name="code"  placeholder="Codigo"/>
    <input className="newProduct_formulario" type="text" name="tilte"  placeholder="Nombre del Producto"/>
    <input className="newProduct_formulario" type="text" name="type"  placeholder="Tipo"/>
    <input className="newProduct_formulario" type="text" name="category" placeholder="Categoria"/>
    <input className="newProduct_formulario" type="text" name="desc"  placeholder="Resumen"/>
    <input className="newProduct_formulario" type="text" name="descripcion"  placeholder="Descripción"/>
    <input className="newProduct_formulario" type="number" name="price"  placeholder="Especificacion de producto"/>
    <input className="newProduct_formulario" type="text" name="medidas"  placeholder="Medidas"/>
    <input className="newProduct_formulario" type="text" name="material"  placeholder="Material"/>
    <input className="newProduct_formulario" type="text" name="garantia"    placeholder="Tiempo de Garantia"/>
    <input className="newProduct_formulario" type="text" name="armado"    placeholder="¿Requiere armado?"/>
    <input className="newProduct_formulario" type="text" name="recomendaciones"  placeholder="Recomendaciones"/>
    <input className="newProduct_formulario" type="text" name="imagen"  placeholder="Link de la imagen del producto"/>

    
    <button className="botons_formulario" type="submit" >Agregar Producto</button>

    </form>


    </div>
  )
}

export default NewProdruct
