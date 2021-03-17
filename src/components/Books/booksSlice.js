import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const loadBooks = createAsyncThunk(
  "books/allBooks",
  async () => {
    const data = await fetch(`http://localhost:3001/books`)
    const json = await data.json()
    return json
  }
);

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

export const consoleLogMo
const allBooks = booksSlice.books
// export const sortBooks = (attribute) => {
//   let sortedBooks = allBooks.sort(function(a, b) {
//     let sortA = a[attribute].toUpperCase();
//     let sortB = b[attribute].toUpperCase();
//     return (sortA < sortB) ? -1 : (sortA > sortB) ? 1 : 0;
//     })
//   return sortedBooks
// }

export default booksSlice.reducer;


