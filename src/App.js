import React, { Component } from 'react';
import './App.css';

import FoodList from './components/FoodList'
// import AddFood from'./components/AddFood';

import Home from './components/Home'
import ExerciseList from './components/ExerciseList';
import ExerciseDetails from './components/ExerciseDetails';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthService from './components/auth/auth-service';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }

  logMeIn= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser();
    return (
      
      <div className="App"
     
      style={{
        height: '100vh' ,
        padding: '10px 45px',
      font: '16px Muli',
      color: '#222',
      margin: '0px auto',
      fontWeight: '300',
      lineHeight: '1.5em',
      backgroundColor: '#F7F9FC',
    }}
    >
  

      
        <Navbar  setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />  

        <Switch>

        <Route exact path="/" render={() => <Login  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/>
        <Route path='/signup' render={() => <Signup  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/>

          <Route path="/home" component={Home}/> 
          <Route path="/exercises" component={ExerciseList}/>
          <Route path="/exercises/:id" component={ExerciseDetails} />
          <Route path='/foods' component ={FoodList}/>
          <Route path ="/foods/:id" component={FoodList}/>         
         
        </Switch> 
       
      
      </div>
     
     );
  }
}

export default App;
