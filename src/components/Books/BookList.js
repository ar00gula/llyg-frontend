import React from 'react'
import { useSelector } from "react-redux"; //useDispatch,
import { selectAllBooks } from './booksSlice' //booksSlice
import Book from '../Book'

const BookList = (props) => {

    // const authorName = (first, last) => {
    //     return `${first} ${last}`
    // }
    
    return (
        <div>
            {
            props.filter.books.map(book => (
                <div className="book" key={book.id}>
                <Book info={book} />
                    {/* <h1><a href={book.title.replace(/\s+/g, '-')}>{book.title}</a></h1>
                    <h2>{book.author.first_name} {book.author.last_name}</h2> */}
                </div>
                ))
            }
        </div>
    )
}

export default BookList