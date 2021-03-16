import React, {useEffect} from 'react';
import BookList from './BookList'
import { useSelector, useDispatch } from 'react-redux'
import { allBooks } from './booksSlice'


function BookListContainer() {

    const books = useSelector(state => state.books)
    const dispatch = useDispatch()


    useEffect(() => {
        fetch('http://localhost:3001/books/').then(resp => resp.json()).then(data => dispatch(allBooks(data)))
        }
    )

    return (
        <div>
            <BookList books={books.books}/>
        </div>
    )
}

BookListContainer.defaultProps = {
    books: []
  }
  
// sortBy={this.props.sortBy}
export default BookListContainer