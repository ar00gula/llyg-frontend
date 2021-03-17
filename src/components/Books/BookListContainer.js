import React from 'react'; //, {useEffect}
import BookList from './BookList'
import Filter from '../Filter'
import { useSelector } from "react-redux"; //useDispatch,
import { selectAllBooks, consoleLogTHIS } from './booksSlice' //booksSlice sortBooks


function BookListContainer() {

    const allBooks = useSelector(selectAllBooks);
    // const filteredBooks = useSelector(selectFilteredBooks)

const sortBooks = () => {
    let toSort = allBooks.books.map(book => book)
    let sortedBooks = toSort.sort(function(a, b) {
        let sortA = a["title"].toUpperCase();
        let sortB = b["title"].toUpperCase();
        return (sortA < sortB) ? -1 : (sortA > sortB) ? 1 : 0;
        })
    return sortedBooks
}

    let filterChoice = allBooks
    // const handleFilterSelection = (selection) => {
    //     filterChoice = sortBooks(selection)
    //     return filterChoice
    // }
    
    return (
        <div>
            {console.log(sortBooks())}
            {/* {consoleLogTHIS()}
            {console.log(sortBooks("author"))} */}
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