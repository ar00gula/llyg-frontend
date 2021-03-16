import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword } from './loginSlice'

function LoginForm(){

    const history = useHistory()

    const loginInfo = useSelector(state => state.loginInfo)
    const dispatch = useDispatch()


    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value, true))
    }
    
    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3001/login`, {
            withCredentials: true,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: loginInfo.username,
                password: loginInfo.password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            }
        )
        .then(() => history.push('/account'))       
    }

    return (
        <div>
            <div>
            <h1>Log In</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input value={loginInfo.username} onChange={handleUsernameChange} type="text" name="username" placeholder="username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={loginInfo.password} onChange={handlePasswordChange} type="password" name="password" placeholder="password"/>
                </div>
                
                <button className="ui button" type="submit">Submit</button>

                <div>
                    or <a href='/signup'>sign up</a>!
                </div>
            </form>
        </div>
        </div>
    )
} 

export default LoginForm
