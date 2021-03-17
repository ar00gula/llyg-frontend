import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginStatus = createAsyncThunk(
    'users/loginStatus',
    async () => {
      const userStatus = await fetch(`http://localhost:3001/logged_in`)
      const data = await userStatus.json()
      return data
    }
  )
  
const sliceOptions = {
    name: 'userInfo',
    initialState: { 
        userInfo: {
            username: "",
            password: "",
            user: "",
            logged_in: "",
            isLoading: false, 
            hasError: false 
        }
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payLoad
        },
        setPassword: (state, action) => {
            state.password = action.payLoad
        },
        loginUser: (state, action) => {
            state = action.payLoad
        },
        logoutUser: (state) => {
            state = {}
        }
    },
  extraReducers: {
    [loginStatus.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
     },
    [loginStatus.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      state.isLoading = false;
      state.hasError = false;
    },
    [loginStatus.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        }
    }
}

export const loginSlice = createSlice(sliceOptions);

export const {
    setUsername,
    setPassword,
    loginUser,
    logoutUser,
  } = loginSlice.actions;

export const selectUserInfo = (state) => state.userInfo

export default loginSlice.reducer;