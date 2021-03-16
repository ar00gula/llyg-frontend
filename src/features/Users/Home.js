import React from 'react'
import BookListContainer from '../../components/Books/BookListContainer'

const Home = (props) => {
    
    return (
        <div>
            <div className="half-box">
                Hello!
            </div>
            <div className="half-box">
                <BookListContainer />
            </div>
            <div className="full-box">
                reviews
            </div>
        </div>
    )
}

export default Home