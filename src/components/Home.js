
import React, { Component } from 'react';
import '../App.css';
import '../index.css';
// import Profile from './Profile';
import { Link } from 'react-router-dom';




class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
    
  render(){
    
    return(
      
        
     
        <div className="home">

        <div className = "home-opt1">
            <Link to={"/Exercise"}> Exercise</Link>
            <p>Review your exercises!</p>
            <div className="exc-lst">
            Dont forget to limber up!
            
            
            </div>
        </div>



        <div className = "home-opt2">
        <Link to={"/food"}> food</Link>
        <p>Review your diet plan!</p>
        
        
        </div>       

        </div>
      )
    
    }
}


export default Home;
