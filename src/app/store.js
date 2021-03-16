import {createStore, combineReducers} from 'redux'
import { loginReducer } from '../features/Users/loginSlice'
import { signupReducer } from '../features/Users/signupSlice'
import { booksReducer } from '../components/Books/booksSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = createStore(combineReducers({
    loginInfo: loginReducer,
    signupInfo: signupReducer,
    //refactor ths into "userInfo" later?
    books: booksReducer
}))
