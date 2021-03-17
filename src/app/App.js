import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Home from '../features/Users/Home'
import NavBar from '../components/navbar'
import Landing from '../features/Landing'
import { loadBooks } from "../components/Books/booksSlice"
import { LoginForm } from '../features/Users/Login'
import { loginStatus } from '../features/Users/newLoginSlice'
import SignUpForm from '../features/Users/Signup'



import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loginStatus());
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <div>
    <Router>
    <div className="wrapper">
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        path='/account'
        component={Home}
      />      
      <Route 
        exact path='/login' component={LoginForm}
      />
      <Route 
        exact path='/signup' component={SignUpForm}
      />
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