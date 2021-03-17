import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword, loginUser, selectUserInfo, userInfoSlice} from './newLoginSlice'

export function LoginForm(){

    const history = useHistory()

    const userInfo = useSelector(selectUserInfo)
    
    const dispatch = useDispatch()

    // const test = () => {
    //     console.log(userInfo.password)
    // }


    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value))
    }
    
    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value))
    }
    const redirect = () => history.push('/account')

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
                username: userInfo.username,
                password: userInfo.password,
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch(loginUser(data)))
        .then(() => history.push('/account'))       
    }

    return (
        <div>
            <div>
                {/* <button onClick={test}>username value</button> */}
            <h1>Log In</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input value={userInfo.username} onChange={handleUsernameChange} type="text" name="username" placeholder="username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={userInfo.password} onChange={handlePasswordChange} type="password" name="password" placeholder="password"/>
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