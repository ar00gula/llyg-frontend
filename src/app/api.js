export const fetchBooks = async () => {
    const books = await fetch('http://localhost:3001/books/');
    return books.json();
  }

//   const fetchBooks = () => {
//     fetch('http://localhost:3001/books/').then(resp => resp.json()).then(data => dispatch(allBooks(data)))
// }