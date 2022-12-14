const BASE_URL ="https://marflexback-production.up.railway.app"
;

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/local/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function forgotPassword(email) {
  const response = await fetch(`${BASE_URL}/auth/local/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
}

export async function resetPassword() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/auth/local/reset-password`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}

export async function changePassword(resetToken, newPassword) {
  const response = await fetch(
    `${BASE_URL}/auth/local/change-password/${resetToken}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword }),
    }
  );
  return response.json();
}

export async function verifyAccount(verifyToken) {
  const response = await fetch(
    `${BASE_URL}/auth/local/verify-account/${verifyToken}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}