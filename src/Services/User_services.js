import axios from "axios";

const URL = "http://localhost:5000/users";

export async function getUsers() {
    const response = await fetch(`${URL}`);
    return response.json();
  }
  
  export async function getUserByEmail(email) {
    const response = await fetch(`${URL}/email/${email}`, {});
    return response.json();
  }
  
  
  export async function createUser(user) {
    const response = await fetch(`${URL}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  }
  
  export async function updateUser(userUpdate) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${URL}`, {
      method: 'PATCH',
      body: JSON.stringify(userUpdate),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }
  
  export async function deleteUser() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${URL}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }