import React from 'react'
import { useHistory } from 'react-router-dom'
import SettingsIcon from '../settingsicon.png';

function NavBar() {

    const history = useHistory()

    const handleLogout = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3001/logout`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            }
        )
        history.push("/")
    }

        return (
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/account">Account</a>
                <div className="dropdown left">
                    <button className="dropbtn gen">Books</button>
                    <div className="dropdown-content">
                    <a href="/books/by-author">By Author</a>
                    <a href="/books/by-title">By Title</a>
                    <a href="/books/by-genre">By Genre</a>
                    </div>
                </div>
                <div className="dropdown right">
                    <button className="dropbtn settings"><img src={SettingsIcon} alt="settings-icon" height="35px"/></button>
                    <div className="dropdown-content-right">
                    <a href="/account/settings">Settings</a>
                    <a href="/account/my-favorites">My Favorites</a>
                    <a href="/account/my-reviews">My Reviews</a>
                    <a href="/" onClick={(event) => handleLogout(event)}>Logout</a>
                    </div>
                </div> 
            </div>
        )
    
}

export default NavBar
