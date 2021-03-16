import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword, setEmail, setPasswordConfirmation } from './signupSlice'

function SignUpForm(props) {

  const signupInfo = useSelector(state => state.signupInfo)
  const dispatch = useDispatch()

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

  const handleSubmit = (event) => {
    event.preventDefault()
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
  }

  return(
    <div>
        <h1>Sign Up</h1>
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Username</label>
                <input value={signupInfo.username} onChange={handleUsernameChange} type="text" name="username" placeholder="username"/>
            </div>
            <div className="field">
                <label>Email</label>
                <input value={signupInfo.email} onChange={handleEmailChange} type="text" name="email" placeholder="email"/>
            </div>
            <div className="field">
                <label>Password</label>
                <input value={signupInfo.password} onChange={handlePasswordChange} type="password" name="password" placeholder="password"/>
            </div>
            <div className="field">
                <label>Password Confirmation</label>
                <input value={signupInfo.passwordConfirmation} onChange={handlePasswordConfirmationChange} type="password" name="password-confirmation"placeholder="password confirmation"/>
            </div>
            
            <button className="ui button" type="submit">Submit</button>

            <div>
                or <a href='/login'>log in</a>!
            </div>
        </form>
    </div>
  )

}

export default SignUpForm;