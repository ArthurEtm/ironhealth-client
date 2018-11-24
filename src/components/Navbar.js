import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';
import './NavBar.css';
import {withRouter} from 'react-router';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ loggedInUser: nextProps["userInSession"]})
  }

  logout = () =>{
    this.service.logout()
    .then(()=>{
      this.props.setTheUserInTheAppComponent(null);
      this.props.history.push('/');
    })
  }
  

  render(){
    console.log(this.state.loggedInUser);
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul className="nav-ul">
          
          <li className="badge badge-info pa2 " id="badge-div">
          Welcome, Arthur
          </li>
            <li className="sign-up">
              <Link to='/exercises' style={{ textDecoration: 'none' }}>Add Exercises</Link>
            </li>
            <li className="sign-up">
              <Link to="/foods"> Add Foods</Link>
            </li>
            <li className="sign-up">
              <Link to="/home">Home</Link>
            </li>
            
              <button className="btn btn-md btn-danger" onClick={()=>this.logout()} id="logout-btn">Log Out</button>
            

          </ul>
        </nav>

      )
    } else {
      return (
        <div>
        <nav className="nav-style">
          <ul>
            <li className="sign-up"><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
        </div>
      )
    }
    }
  }
  export default withRouter(Navbar);

  