import React from 'react'; //, {useEffect}
import BookList from './BookList'
import Filter from '../Filter'
import { useSelector } from "react-redux"; //useDispatch,
import { selectAllBooks, consoleLogTHIS } from './booksSlice' //booksSlice sortBooks


function BookListContainer() {

    const allBooks = useSelector(selectAllBooks);
    // const filteredBooks = useSelector(selectFilteredBooks)

const sortBooks = (attribute) => {
    const splitAttribute = attribute.split(" ")
    let toSort = allBooks.books.map(book => book)
    let sortedBooks = toSort.sort(function(a, b) {
    if (splitAttribute.length === 1) {
        let sortA = a[attribute].toUpperCase();
        let sortB = b[attribute].toUpperCase();
        return (sortA < sortB) ? -1 : (sortA > sortB) ? 1 : 0;
    } else {
        let sortA = a[splitAttribute[0]][splitAttribute[1]].toUpperCase();
        let sortB = b[splitAttribute[0]][splitAttribute[1]].toUpperCase();
        return (sortA < sortB) ? -1 : (sortA > sortB) ? 1 : 0;
        }
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
            {/* {consoleLogTHIS()}
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