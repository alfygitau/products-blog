import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./userRedux";

const url = "https://dummyjson.com/auth/login";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(url, user);
    console.log(response.data);
    dispatch(loginSuccess(response.data));
    const newUser = response.data
    localStorage.setItem("user", JSON.stringify(newUser))
  } catch (error) {
    dispatch(loginFail(error));
  }
};
