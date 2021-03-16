
export const selectSignupInfo = state => state.signupInfo

const initialState = {
        user: {},
        isLoggedIn: "",
        username: "",
        password: "",
        errors: ""
    }

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'login/setUsername':
        return {
            ...state,
            username: action.payload[0],
            isLoggedIn: action.payload[1]
            }
      case 'login/setPassword':
        return {
            ...state,
            password: action.payload
            }
    
      default:
        return state;
    }
  }
  
  
  
  export function setUsername(username, loginStatus) {
      return {
        type: 'login/setUsername',
        payload: [username, loginStatus]
      }
    }
    
  export function setPassword(password) {
    return {
      type: 'login/setPassword',
      payload: password
    }
  }