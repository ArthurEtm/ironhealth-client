// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import {Link} from 'react-router-dom' 
import { withRouter } from 'react-router';
// import {withLayout} from'./lib/withLayout';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.login(username, password)

    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.setTheUserInTheAppComponent(response);
        
        this.props.history.push('/home');

    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render(){
    return(
      <div className="col-12 col-md-6 form-sign-wrapper"
// style={withLayout}
 >
    <h2>Please Login</h2>
          
        <form onSubmit={this.handleFormSubmit}>


          <div className="form-group">
          <label>Username:</label>
          <input className="form-control" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </div>
          
          <div className="form-group">
          <label>Password:</label>
          <input className="form-control" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /> 
          </div>
             

          <input className="btn btn-block btn-success" type="submit" value="login" />

        </form>
  
        <p>Don't have an account? 

            <Link to={"/signup"}> Signup</Link>
        </p>
  
      </div>
    )
  }


}

export default withRouter(Login);