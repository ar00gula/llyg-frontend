import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword, setEmail, setPasswordConfirmation, selectNewUserInfo } from './signupSlice'
import { loginUser, setErrors } from './newLoginSlice'

export default function SignUpForm() {

  const newUserInfo = useSelector(selectNewUserInfo)

  //change to session user info

  const dispatch = useDispatch()
  const history = useHistory()

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value))
  }
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value))
  }
  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value))
  }
  const handlePasswordConfirmationChange = (event) => {
    dispatch(setPasswordConfirmation(event.target.value))
  }
  const redirect = () => history.push('/account')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3001/users',
    {withCredentials: true,
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: newUserInfo.username,
        email: newUserInfo.email,
        password: newUserInfo.password,
        password_confirmation: newUserInfo.passwordConfirmation
      })
    })
      .then(resp => resp.json())
      .then(data => { console.log(data)
        if (data.status === 'created') {
          dispatch(loginUser(data))
          redirect()
        } else {
          dispatch(setErrors(data))
        }
      })
      dispatch(setUsername(""))
      dispatch(setEmail(""))
      dispatch(setPassword(""))
      dispatch(setPasswordConfirmation(""))
      // .catch(error => console.log('api errors:', error))
    };
  //   fetch('http://localhost:3001/users', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
  //     localStorage.setItem("token", data.jwt)
  //     props.handleLogin(data.user)
  //   })
  //   setUsername("")
  //   setEmail("")
  //   setPassword("")
  //   setPasswordConfirmation("")

  return(
    <div>
        <h1>Sign Up</h1>
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Username</label>
                <input value={newUserInfo.username} onChange={handleUsernameChange} type="text" name="username" placeholder="username"/>
            </div>
            <div className="field">
                <label>Email</label>
                <input value={newUserInfo.email} onChange={handleEmailChange} type="text" name="email" placeholder="email"/>
            </div>
            <div className="field">
                <label>Password</label>
                <input value={newUserInfo.password} onChange={handlePasswordChange} type="password" name="password" placeholder="password"/>
            </div>
            <div className="field">
                <label>Password Confirmation</label>
                <input value={newUserInfo.passwordConfirmation} onChange={handlePasswordConfirmationChange} type="password" name="password-confirmation" placeholder="password confirmation"/>
            </div>
            
            <button className="ui button" type="submit">Submit</button>

            <div>
                or <a href='/login'>log in</a>!
            </div>
        </form>
    </div>
  )
}