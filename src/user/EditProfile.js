import React, { Component } from 'react'
import { read, update } from './apiUser'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '../auth/index'
class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            redirectToProfile: false
        }
    }
    init = userId => {
        const token = isAuthenticated().token
        read(userId, token)
            .then(data => {
                if (data.error) {
                    // console.log(data.error) 
                    this.setState({ redirectToProfile: true })
                }
                else {
                    console.log(data.name)
                    this.setState({ id: data._id, name: data.name, email: data.email, error:'' })
                }
            })
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId)

    }
    handleChange = (name) => event => {
        this.setState({ [name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        const { name, email, password } = this.state
        const user = {
            name, email, password
        }
        console.log("user objects", user)
        const userId = this.props.match.params.userId;
        const token = isAuthenticated().token;
        update(userId, token, user).then(data => {
            if (data.error) this.setState({ error: data.error });
            else this.setState({ redirectToProfile: true });
        })
    }
    render() {
        const { id, name, email, password, redirectToProfile } = this.state
        if (redirectToProfile) {
            return <Redirect to={`/user/${id}`} />
        }
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Edit Profile</h2>
                <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input type="text" className="form-control" value={name} onChange={this.handleChange("name")} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input type="email" className="form-control" value={email} onChange={this.handleChange("email")} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input type="password" className="form-control" value={password} onChange={this.handleChange("password")} />
                    </div>
                    <button className="btn btn-raised btn-primary" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
        )
    }
}

export default EditProfile
