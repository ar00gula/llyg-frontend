// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector, useDispatch } from 'react-redux'

// export const selectSignupInfo = state => state.signupInfo


// const initialState = {
//         user: {},
//         isLoggedIn: "",
//         username: "",
//         password: "",
//         errors: ""
//     }

// export const loginStatus = () => {
//       fetch(`http://localhost:3001/logged_in`, {withCredentials: true})
//       .then(response => response.json())
//       .then(data => {
//         if (data.logged_in) {
//         handleLogin(data)
//       } else {
//         handleLogout()
//       }})
//         .catch(error => console.log('api errors:', error))      
//     }

// export const loginReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'login/setUsername':
//         return {
//             ...state,
//             username: action.payload[0],
//             isLoggedIn: action.payload[1]
//             }
//       case 'login/setPassword':
//         return {
//             ...state,
//             password: action.payload
//             }
    
//       default:
//         return state;
//     }
//   }
  
  
  
//   export function setUsername(username, loginStatus) {
//       return {
//         type: 'login/setUsername',
//         payload: [username, loginStatus]
//       }
//     }
    
//   export function setPassword(password) {
//     return {
//       type: 'login/setPassword',
//       payload: password
//     }
//   }