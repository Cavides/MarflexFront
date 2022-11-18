import axios from "axios";

const URL = "http://localhost:5000/facturas";

const createFactura= async(factura) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(factura),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newFactura = await fetch(URL,options);
    return newFactura;
}

const getAllFacturas = async () =>{
    const response = await fetch(`${URL}`);
    return await response.json();
  }
const getFactura = async (id) =>{
    const response = await fetch(`${URL}/${id}`);
    return await response.json();
  }



export {createFactura, getAllFacturas, getFactura };

