
export const selectSignupInfo = state => state.signupInfo

const initialState = {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: ''
    }

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'signup/setUsername':
            return {
                ...state,
                username: action.payload,
            }
        case 'signup/setPassword':
            return {
                ...state,
                password: action.payload
            }
        
        case 'signup/setPasswordConfirmation':
            return {
                ...state,
                password_confirmation: action.payload
            }
        case 'signup/setEmailConfirmation':
            return {
                ...state,
                email: action.payload
            }
      default:
        return state;
    }
  }
  
  
  
  export function setUsername(username) {
      return {
        type: 'signup/setUsername',
        payload: username
      }
    }
    
  export function setPassword(password) {
    return {
      type: 'signup/setPassword',
      payload: password
    }
  }

  export function setEmail(email) {
    return {
      type: 'signup/setEmail',
      payload: email
    }
  }

  export function setPasswordConfirmation(passwordConfirmation) {
    return {
      type: 'signup/setPasswordConfirmation',
      payload: passwordConfirmation
    }
  }