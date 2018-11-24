// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import {Link} from 'react-router-dom' 

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', goals: '' };
    this.service = new AuthService();

  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form ----------- ", this.state.username);
    console.log("submitting form ----------- ", this.state.password);
    console.log("submitting form ----------- ", this.state.goals);

    const username = this.state.username;
    const password = this.state.password;
    const goals = this.state.goals;
  
    this.service.signup(username, password,goals)
    .then( theUserObject => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.setTheUserInTheAppComponent(theUserObject)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value}, ()=>console.log('=-=-=-=-=-0987654321234567890',this.state));
  }
      
  render(){
    return(
      <div className="co-12 col-md-6 form-sign-wrapper">
          <h2>Welcome beloved</h2> 
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input className="form-control" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </div>
         
          <div className="form-group">
          <label>Password:</label>
          <input className="form-control" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </div>
          
        <div className="form-group">
        <label>Goals:</label>
          {/* <input name="goals"></input> */}

          <select className="form-control" name="goals" onChange={ e => this.handleChange(e)}>
          
            <option value="gain" >Gain</option>
            <option value="maintain" >Maintain</option>
            <option value="lose" >Lose</option>
        </select>
        </div>
          
<br>
</br>
          <input className="btn btn-block btn-success" type="submit" value="Signup" />
          
        </form>
  
        <p>Already have account? 
            <Link to={"/"}> Login</Link>
        </p>
  
      </div>
    )
  }


}

export default Signup;