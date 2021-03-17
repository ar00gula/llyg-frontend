import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux' //useSelector
import Home from '../features/Users/Home'
import BookListContainer from '../components/Books/BookListContainer'
import NavBar from '../components/navbar'
import Landing from '../features/Landing'
import { loadBooks } from "../components/Books/booksSlice"
import { LoginForm } from '../features/Users/Login'
import SignUpForm from '../features/Users/Signup'



import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  // const { hasError } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  // const fetchCurrentUser = () => {
  //   fetch(`http://localhost:3001/users`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }
  return (
    <div>
    <Router>
    <div className="wrapper">
    {/* <button onClick={fetchCurrentUser}>current user</button> */}
    <a href="/login">login</a>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route path='/home' component={Home} />      
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/signup' component={SignUpForm} />
      <Route path='/books' component={BookListContainer} />
      </Switch>
          {/* <Route path="/books/by-title" render={() => <BookCardContainer sortBy={['title']}/>} />
          <Route path="/books/by-author" component={() => <BookCardContainer sortBy={['author', 'last_name']}/>} /> */}
          {/* put all my pages here!! the contents will change depending on what URL i'm at!! this is delightful!!!*/}
    </div>
    <NavBar />
    </Router>
    </div>
  );

}

export default App;