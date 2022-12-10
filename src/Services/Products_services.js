const URL = "https://marflexback-production.up.railway.app"


const createProduct = async(product) =>{
  const response = await fetch(`${URL}/productos`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.text();
}


const getAllProducts = async () =>{
    const response = await fetch(`${URL}/productos`);
    return await response.json();
  }
  
const getProduct = async (_id) =>{
    const response = await fetch(`${URL}/productos/${_id}`);
    return await response.json();
  }

  const updateProduct = async(productUpdate) => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}/productos`, {
      method: 'PATCH',
      body: JSON.stringify(productUpdate),
      headers: {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

  const deleteProduct = async (id) => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}/productos/${id}`, {
      method: 'DELETE',
      headers: {
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

  export async function getProductByCode(code) {
    const response = await fetch(`${URL}/productos/code/${code}`, {});
    return response.json();
  }
  


export {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct, };