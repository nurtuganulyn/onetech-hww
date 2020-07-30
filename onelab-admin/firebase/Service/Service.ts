import Axios from "axios";

import { API_KEY } from "../API/API_KEY";
import { API_LINK } from "../API/API_LINK";

export async function registr(value: { email: string; password: string }) {
  const userData = {
    email: value.email,
    password: value.password,
    returnSecureToken: true,
  };
  try {
    const responce = await Axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      userData
    );
    console.log("responce - ", responce.data);
  } catch (error) {
    console.log("error - ", error);
  }
}

export async function login(value: { email: string; password: string }) {
  const userData = {
    email: value.email,
    password: value.password,
    returnSecureToken: true,
  };
  try {
    const responce = await Axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      userData
    );
    console.log("responce - ", responce.data);
  } catch (error) {
    console.log("error - ", error);
  }
}

export async function POST(object: any) {
  try {
    await Axios.post(`${API_LINK}.json()`, object);
  } catch (error) {
    console.log("error - ", error);
  }
}

export async function GET() {
  try {
    await Axios.get(`${API_LINK}.json()`);
  } catch (error) {
    console.log("error - ", error);
  }
}
