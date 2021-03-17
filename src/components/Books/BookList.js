import React from 'react'
import { useSelector } from "react-redux"; //useDispatch,
import { selectAllBooks } from './booksSlice' //booksSlice 

const BookList = () => {

    // const dispatch = useDispatch();
    const allBooks = useSelector(selectAllBooks);

    return (
        <div>
            {
        allBooks.books.map(book => (
            <div className="book" key={book.id}>
                <h1><a href={book.title.replace(/\s+/g, '-')}>{book.title}</a></h1>
                <h2>{book.author.first_name} {book.author.last_name}</h2>
            </div>
        ))
    }
        </div>
    )
}

export default BookList