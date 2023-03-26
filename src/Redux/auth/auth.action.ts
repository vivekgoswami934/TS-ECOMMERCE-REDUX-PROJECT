import { LoginData } from "../../utils/types";
import { AppDispatch } from "../store";
import { userLoginAPI } from "./auth.api";
import * as types from "./auth.types";

export interface IUserLoginRequest {
  type: typeof types.USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccess {
  type: typeof types.USER_LOGIN_SUCCESS;
  payload: string;
}

export interface IUserLoginError {
  type: typeof types.USER_LOGIN_ERROR;
}

export type AuthAction =
  | IUserLoginError
  | IUserLoginRequest
  | IUserLoginSuccess;

const userLoginRequest = (): IUserLoginRequest => {
  return {
    type: types.USER_LOGIN_REQUEST,
  };
};

const userLoginSuccess = (token: string): IUserLoginSuccess => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: token,
  };
};

const userLoginError = (): IUserLoginError => {
  return {
    type: types.USER_LOGIN_ERROR,
  };
};

export const userLogin =
  (payload: LoginData): any =>
  async (dispatch: AppDispatch) => {
    dispatch(userLoginRequest());
    try {
      let data = await userLoginAPI(payload);
      if (data) {
        dispatch(userLoginSuccess(data));
      }
    } catch (e) {
      dispatch(userLoginError());
    }
  };
