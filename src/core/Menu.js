import { Link, withRouter } from 'react-router-dom'
import React from 'react'
import {signout,isAuthenticated} from '../auth'
const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "grey" }
    else return { color: "#ffffff" }
}



const Menu = ({ history }) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/")} to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/users")} to="/users" >Users</Link>
                </li>
                {!isAuthenticated() && (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
                        </li>
                    </>
                )}
                {isAuthenticated() && (
                    <>
                        <li className="nav-item">
                            <span className="nav-link" style={isActive(history, "/signout"), { cursor: "pointer", color: "white" }} onClick={() => signout(() => history.push('/signin'))} >Signout</span>
                        </li>
                        <li className="nav-item">
                    
                            
                                <Link className="nav-link" to={`/user/${isAuthenticated().user._id}`} style={isActive(history,`/user/${isAuthenticated().user._id}`)}>WELCOME  {isAuthenticated().user.name}</Link>
                        </li>
                    </>
                )}
            </ul>


        </div>
    )
}

export default withRouter(Menu)
