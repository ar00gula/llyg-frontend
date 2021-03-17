import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginStatus = createAsyncThunk(
    'users/loginStatus',
    async () => {
      const userStatus = await fetch(`http://localhost:3001/logged_in`, {withCredentials: true})
      const data = await userStatus.json()
      return data
    }
  )


const sliceOptions = {
    name: 'userInfo',
    initialState: { 
        username: "",
        password: "",
        logged_in: "",
        isLoading: false, 
        hasError: false, 
        errors: []
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        loginUser: (state, action) => {
            state.username = action.payload.user.username
            state.logged_in = action.payload.logged_in
            state.password = ""
        },
        logoutUser: (state) => {
            state = {}
        },
        setErrors: (state, action) => {
            state.errors = action.payload.errors
        }
    },
  extraReducers: {
    [loginStatus.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
     },
    [loginStatus.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.logged_in = action.payload.logged_in;
      state.isLoading = false;
      state.hasError = false;
    },
    [loginStatus.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        }
    }
}

export const userInfoSlice = createSlice(sliceOptions);

export const {
    setUsername,
    setPassword,
    loginUser,
    logoutUser,
    setErrors
  } = userInfoSlice.actions;


//   setUsername: (payload) => {type 'userInfo/setUsername', payload}
 

export const selectUserInfo = (state) => state.userInfo

export default userInfoSlice.reducer;