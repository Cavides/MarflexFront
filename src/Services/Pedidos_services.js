const URL = "https://marflexback-production.up.railway.app";

export async function createPedido(pedido) {
  const response = await fetch(`${URL}/pedidos`, {
    method: 'POST',
    body: JSON.stringify(pedido),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.text();
}


const getAllPedidos = async () =>{
    const response = await fetch(`${URL}/pedidos`);
    return await response.json();
  }
  
const getPedido = async (id) =>{
    const response = await fetch(`${URL}/pedidos/${id}`);
    return await response.json();
  }

  const updatePedido = async(pedidoUpdate) => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}/pedidos`, {
      method: 'PATCH',
      body: JSON.stringify(pedidoUpdate),
      headers: {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

  const deletePedido = async () => {
    // const token = localStorage.getItem('token');
    const response = await fetch(`${URL}/pedidos`, {
      method: 'DELETE',
      headers: {
        // authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

  export async function getPedidoByCode(numfactura) {
    const response = await fetch(`${URL}/pedidos/numfactura/${numfactura}`, {});
    return response.json();
  }

  export { getAllPedidos, getPedido, updatePedido, deletePedido, };