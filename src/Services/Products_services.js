const URL = "https://marflexback-production.up.railway.app"

const createProduct= async(product) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
        }
};
    const newProduct = await fetch('{URL}/productos',options);
    return newProduct.json();
}

const getAllProducts = async () =>{
    const response = await fetch(`${URL}/productos`);
    return await response.json();
  }
const getProduct = async (id) =>{
    const response = await fetch(`${URL}/productos/${id}`);
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

  const deleteProduct = async () => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}/productos`, {
      method: 'DELETE',
      headers: {
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }


export {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct, };