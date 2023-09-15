import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "../interfaces/auth.models";



export const AuthState: AuthStateType = {

    errorsRegister: {
        detail: "",
    },
    isLoadingRegister: false,

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
        signupReducer: createReducer
    },
});

export const { signupReducer } = AuthSlice.actions;

export default AuthSlice.reducer;