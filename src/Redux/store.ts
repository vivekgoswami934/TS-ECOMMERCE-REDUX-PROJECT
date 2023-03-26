import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./app/app.reducer";
import { reducer as AuthReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
});

let middleware = [thunk]

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
