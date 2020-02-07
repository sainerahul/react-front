import React, { Component } from 'react'
import { list } from "./apiUser"
import {Link} from 'react-router-dom'
import DefaultDp from '../images/avatar.jpg'
class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                this.setState({ users: data })
                console.log(this.state)
            }
        })
    }
    renderUsers = (users) => {
       return <div className="row">{users.map((user, i) => (  (
        <div className="card col-md-2"  key={i}>
        <img className="card-img-top" src={DefaultDp} alt={user.name} 
        style={{width:'100%', height:'15vw', objectFit:'cover'}}/>
        <div className="card-body">
          <div className="card-title lead">{user.name}</div>
          <p className="card-text">{user.email}</p>
          <Link to={`/user/${user._id}`} className="btn btn-raised btn-sm btn-primary">View Profile</Link>
        </div>
      </div> 
       ) ))}</div>
    }
    render() {
        const { users } = this.state;
        return (
            <div classNameName="container">
                <h2 className="mt-5 mb-5">Users</h2>
                {this.renderUsers(users)}
            </div>
        )
    }
}

export default Users


