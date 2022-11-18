const URL = "http://localhost:5000/productos";

const createProduct= async(product) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newProduct = await fetch(URL,options);
    return newProduct.json();
}

const getAllProducts = async () =>{
    const response = await fetch(`${URL}`);
    return await response.json();
  }
const getProduct = async (id) =>{
    const response = await fetch(`${URL}/${id}`);
    return await response.json();
  }

  const updateProduct = async(productUpdate) => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}`, {
      method: 'PATCH',
      body: JSON.stringify(productUpdate),
      headers: {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

  const deleteProduct = async () => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}`, {
      method: 'DELETE',
      headers: {
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }


export {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct, };