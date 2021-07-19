import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      lastname: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      lastname: this.state.lastname
    };


    axios.post('http://localhost:8080/users/add', newUser)
      .then(res=> console.log(res.data))

    console.log(newUser);
    
    this.setState({
      username: '',
      lastname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="">
            <label>Username</label>
            <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>

            <label>Lastname</label>
            <input type="text" required className="form-control" value={this.state.lastname} onChange={this.onChangeLastname}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}