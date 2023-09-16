import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "../interfaces/auth.models";

export const AuthState: AuthStateType = {
  errorsRegister: {
    detail: "",
  },
  user: {},
  isLoadingRegister: false,
  isLoadingLogin: false,
  loginErrors: {},
  activateErrors: {},
  isLoadingActivateAccount: false,
  loginSuccess: false,
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
    activateAccountReducer: createReducer,
  },
});

export const { signupReducer, signInReducer, activateAccountReducer } =
  AuthSlice.actions;

export default AuthSlice.reducer;
