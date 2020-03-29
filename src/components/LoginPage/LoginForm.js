import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';



// Im saving these in case  I need to test with them later
//      <button onClick={() => this.changeUsername()}>Change to new value</button>
//      <button onClick={() => this.changeitbackUsername()}>Change to old value</button>
//      <button onClick={this.onChangeUser.bind(this)}>Change Username in Header</button>

class LoginForm extends Component {
	
	
  constructor(props) {
    super(props);
    this.state = { username: 'Guest' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

changeUsername() {
	this.setState({
		username: 'newvalue'
	})
}

changeitbackUsername() {
	this.setState({
		username: 'oldvalue'
	})
}

 handleChange(event) {
    this.setState({value: event.target.value});
}


 handleSubmit(event) {
	this.setState({
		username: this.state.value
	})
    event.preventDefault();
    this.props.changeUser(this.state.value)

  }


  onChangeUser() {
	this.props.changeUser(this.state.username)
	
  }


  render() {
    return (
      <div>

      <h3>Welcome {this.state.username}</h3>
      <br/>

   	  <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value}  onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
  	  </form>
      </div>
    )
  }
}

export default LoginForm;
