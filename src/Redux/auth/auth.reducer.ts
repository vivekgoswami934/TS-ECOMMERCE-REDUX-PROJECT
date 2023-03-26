import { AuthAction } from "./auth.action";
import * as types from "./auth.types";

export interface AuthState {
  loading: boolean;
  error: boolean;
  isAuth: boolean;
  token: string;
}

const initialState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
};

const reducer = (
  oldState: AuthState = initialState,
  action: AuthAction
): AuthState => {
  const { type } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...oldState, loading: true };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        loading: false,
        isAuth: true,
        token: action.payload,
      };
    case types.USER_LOGIN_ERROR:
      return { ...oldState, loading: false, error: true };
    default:
      return oldState;
  }
};

export { reducer };
