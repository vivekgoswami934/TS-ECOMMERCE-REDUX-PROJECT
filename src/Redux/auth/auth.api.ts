import axios, { AxiosResponse } from "axios";
import { LoginData } from "../../utils/types";

export const userLoginAPI = async (payload: LoginData) => {
  try {
    let response: AxiosResponse<{ token: string }> = await axios.post(
      "https://reqres.in/api/login",
      payload
    );
    return response.data.token;
  } catch (e) {
    console.error("userLoginAPI error", e);
  }
};
