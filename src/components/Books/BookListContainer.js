import React, {useEffect} from 'react';
import BookList from './BookList'


function BookListContainer() {

    return (
        <div>
            <BookList />
        </div>
    )
}

BookListContainer.defaultProps = {
    books: []
  }
  
// sortBy={this.props.sortBy}
export default BookListContainer