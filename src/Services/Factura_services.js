

const URL = "https://marflexback-production.up.railway.app";

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
    const response = await fetch(`${URL}/facturas`);
    return await response.json();
  }
const getFactura = async (id) =>{
    const response = await fetch(`${URL}/facturas/${id}`);
    return await response.json();
  }



export {createFactura, getAllFacturas, getFactura };

