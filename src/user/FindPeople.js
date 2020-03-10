import React, { Component } from 'react'
import { findPeople, follow } from "./apiUser"
import {Link} from 'react-router-dom'
import DefaultDp from '../images/avatar.jpg'
import {isAuthenticated} from '../auth/index'
class FindPeople extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            error:'',
            open:false,
            followMessage:''
        }
    }
    componentDidMount() {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        findPeople(userId,token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                this.setState({ users: data })
                console.log(this.state)
            }
        })
    }
    clickFollow=(user,i) => {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        follow(userId,token,user._id)
        .then(data=>{
            if(data.error){
                this.setState({error:data.error})
            }
            else{
                let toFollow = this.state.users
                toFollow.splice(i,1)
                this.setState({users:toFollow,open:true,followMessage:`Following ${user.name}`})
                console.log('open=',this.state.open)
            }
        })

    }
    renderUsers = (users) => {
       return <div className="row">{users.map((user, i) => (  (
        <div className="card col-md-2"  key={i}>
             <div className="text-center">
        <img style={{height:"200px", width:"200px", borderRadius:"50%", border:"1px solid grey"}} className="img-thumbnail" src={`http://localhost:8080/user/photo/${user._id}`} onError={i=>{i.target.src = `${DefaultDp}`}} alt={user.name}/>
        <div className="card-body">
          <div className="card-title lead">{user.name}</div>
          <p className="card-text">{user.email}</p>
          <Link to={`/user/${user._id}`} className="btn btn-raised btn-sm btn-info">View Profile</Link>
          <button onClick={()=>this.clickFollow(user,i)} className="btn btn-raised btn-info float-right btn-sm mr-4">Follow</button>
        </div>
        </div>
      </div> 
       ) ))}</div>
    }
    render() {
        const { users,open,followMessage } = this.state;
        return (
            <div classNameName="container">
                <h2 className="mt-5 mb-5">Find People</h2>
                {open && (<div className="alert alert-info">
        <p>{followMessage }</p>
                </div>)}
                {this.renderUsers(users)}
            </div>
        )
    }
}

export default FindPeople


