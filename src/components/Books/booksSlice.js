// export const select = state => state.loginInfo

// export const selectSignupInfo = state => state.signupInfo

const initialState = []

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'books/allBooks':
        return {
            ...state,
            books: action.payload
        }
      default:
        return state;
    }
  }
  
  
  
  export function allBooks(books) {
      return {
        type: 'books/allBooks',
        payload: books
      }
    }
    
//     export function setPassword(password) {
//       return {
//         type: 'loginSignup/setPassword',
//         payload: password
//       }
//     }
  