import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../features/Users/loginSlice'
import { signupReducer } from '../features/Users/signupSlice'
import booksReducer from '../components/Books/booksSlice'

export const store = configureStore({
    reducer: {
        loginInfo: loginReducer,
        signupInfo: signupReducer,
        //refactor ths into "userInfo" later?
        books: booksReducer
    }
})