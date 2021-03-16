import React, {useEffect} from 'react'

function BookList(props) {

    const mapBooks = () => {
        props.books.map(book => (
            <div className="book" key={book.id}>
                <h1><a href={book.title.replace(/\s+/g, '-')}>{book.title}</a></h1>
                <h2>{book.author.first_name} {book.author.last_name}</h2>
            </div>
        ))
    }

    return (
        <div>
            {props.books ? mapBooks() : "Fetching data!"}
        </div>
    )
}

export default BookList