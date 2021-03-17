import { createSlice } from "@reduxjs/toolkit";

const sliceOptions = {
    name: 'newUserInfo',
    initialState: { 
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPasswordConfirmation: (state, action) => {
          state.passwordConfirmation = action.payload
      }
    }
}

export const newUserInfoSlice = createSlice(sliceOptions);

export const {
    setUsername,
    setPassword,
    setEmail,
    setPasswordConfirmation,
  } = newUserInfoSlice.actions;


//   setUsername: (payload) => {type 'userInfo/setUsername', payload}
 

export const selectNewUserInfo = (state) => state.newUserInfo

export default newUserInfoSlice.reducer;