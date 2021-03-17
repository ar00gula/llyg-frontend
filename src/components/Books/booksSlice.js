import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadBooks = createAsyncThunk(
  "books/allBooks",
  async () => {
    const data = await fetch(`http://localhost:3001/books`)
    const json = await data.json()
    return json
  }
);
  //   return async (dispatch) => {
  //     const books = fetchBooks()
  //     dispatch({type: 'books/allBooks', payload: books})
  //   }
  // };

const sliceOptions = {
  name: "books",
  initialState: {
    books: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const booksSlice = createSlice(sliceOptions);

export const selectAllBooks = (state) => state.books

// export const selectFilteredAllRecipes = (state) => {
//   const allRecipes = selectAllRecipes(state);
//   const searchTerm = selectSearchTerm(state);

//   return allRecipes.filter((recipe) =>
//     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

export default booksSlice.reducer;


// export const booksReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'books/allBooks':
//         return {
//             ...state,
//             books: action.payload
//         }
//       default:
//         return state;
//     }
  // }
  
  
  
  // export function allBooks(books) {
  //     return {
  //       type: 'books/allBooks',
  //       payload: books
  //     }
  //   }
    

  