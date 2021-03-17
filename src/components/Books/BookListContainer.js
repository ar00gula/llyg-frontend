import React from 'react'; //, {useEffect}
import BookList from './BookList'
import Filter from '../Filter'
import { useSelector } from "react-redux"; //useDispatch,
import { selectAllBooks, consoleLogTHIS } from './booksSlice' //booksSlice sortBooks


function BookListContainer() {

    const allBooks = useSelector(selectAllBooks);
    // const filteredBooks = useSelector(selectFilteredBooks)

    let filterChoice = allBooks
    // const handleFilterSelection = (selection) => {
    //     filterChoice = sortBooks(selection)
    //     return filterChoice
    // }
    
    return (
        <div>
            {consoleLogTHIS()}
            {/* {console.log(sortBooks("author"))} */}
            {/* <Filter selectFilter={handleFilterSelection}/> */}
            <BookList filter={allBooks}/>
        </div>
    )
}

BookListContainer.defaultProps = {
    books: []
  }
  
// sortBy={this.props.sortBy}
export default BookListContainer