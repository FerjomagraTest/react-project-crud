import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';


const Users = props=> (
	<tr>
    	<td>{props.users.lastname}</td>
    </tr>
)

export default class Lastname extends Component{

	constructor(props) {
	    super(props);

	    this.state = {user: []};
	}

	componentDidMount() {
	    axios.get('http://localhost:8080/lastname/')
	      .then(response => {
	        this.setState({ user: response.data })
	      })
	      .catch((error) => {
	        console.log(error);
	      })
	  }

	lastnameList() {
	    return this.state.user.map(currentuser => {
	      return <Users users={currentuser} key={currentuser._id}/>;
	    })
	  }

	render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <h3>
        { this.lastnameList() }
        </h3>
      </div>
    )
  }
}