import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { remove } from './apiUser'
import { signout } from '../auth'
import { Redirect } from 'react-router-dom'
class DeleteUser extends Component {
    state = {
        redirect: false
    }
    deleteConfirm = () => {
        let answer = window.confirm("Are you sure you want to delete you account?")
        if (answer) {
            this.deleteAccount()
        }
    }
    deleteAccount = () => {
        const token = isAuthenticated().token;
        const userId = this.props.userId
        remove(userId, token)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    // signout redirect
                    signout(() => {
                        console.log("user is deleted")

                    })
                    this.setState({ redirect: true })
                }
            })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/signup" />
        }
        return (

            <button onClick={this.deleteConfirm} className="btn btn-raised btn-danger">Delete</button>

        )
    }
}

export default DeleteUser;
