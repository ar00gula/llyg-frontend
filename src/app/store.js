import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../features/Users/newLoginSlice'
import booksReducer from '../components/Books/booksSlice'
import newUserInfoReducer from '../features/Users/signupSlice'


export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        newUserInfo: newUserInfoReducer,
        books: booksReducer
    }
})