import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "../interfaces/auth.models";

export const AuthState: AuthStateType = {
  errorsRegister: {
    detail: "",
  },
  isLoadingRegister: false,
  isLoadingLogin: false,
  loginErrors: {},
};

const createReducer = (
  state: AuthStateType,
  action: { payload: AuthStateType }
) => ({
  ...state,
  ...action.payload,
});

const AuthSlice = createSlice({
  name: "register",
  initialState: AuthState,
  reducers: {
    signupReducer: createReducer,
    signInReducer: createReducer,
  },
});

export const { signupReducer, signInReducer } = AuthSlice.actions;

export default AuthSlice.reducer;
