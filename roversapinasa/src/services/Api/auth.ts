import { setToken } from "../storage";


export const login = async (values: { email: string; password: string }) => {
  let error = ''
  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    });
    console.log(response)
    if (response.ok) {
      const token = await response.json();
      setToken(token);
    } else {
      const errorData = await response.json();
      error = errorData.error;
    }
  } catch (error) {
    error = (error as Error).message
    console.log((error as Error).message);
  }

  return error
};

export const signup = async (values: { email: string; password: string }) => {
  let error = ''
  try {
    const response = await fetch('http://localhost:8000/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    });
    if (response.ok) {
      const token = await response.json();
      setToken(token);
    } else {
      const errorData = await response.json();
      error = errorData.error;
    }
  } catch (error) {
    error = (error as Error).message
    console.log((error as Error).message);
  }

  return error
};