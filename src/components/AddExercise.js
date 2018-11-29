// components/exercises/AddExercise.js

import React, { Component } from 'react';
import axios from 'axios';

class AddExercise extends Component {
  constructor(props){
      super(props);
      this.state = { reps: "", sets: "", weight: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    // const {type, description} = this.state;
    const reps = this.state.reps;
    const sets = this.state.sets;
    const weight = this.state.weight;
    axios.post("https://ironhealth.herokuapp.com/api/exercises/add", {reps, sets, weight })
    .then( (response) => {
    
      
       this.props.addNew(response);
        this.setState({reps: "", sets: "", weight: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
  

      this.setState({[name]: value});
  }

  render(){
    return(

      
      <div className="col-12 form-sign-wrapper">
      <h2>Jumping jacks</h2>
       
        <form onSubmit={this.handleFormSubmit}>

       <div className="form-group">
       <label>REPS:</label>

        <input className="form-control" type="text" name="reps" value={this.state.reps} onChange={ e => this.handleChange(e)}/>  
         </div>
          
        <div className="form-group">
        <label>SETS:</label>

        <textarea className="form-control" name="sets" value={this.state.sets} onChange={ e => this.handleChange(e)} />

        </div>

        <div className="form-group">
        <label>INTENSITY:</label>

        <textarea className="form-control" name="weight" value={this.state.weight} onChange={ e => this.handleChange(e)} />

        </div>
          
          <input className="btn-block btn-success" type="submit" value="Submit" />

        </form>

      </div>
    )
  }
}

export default AddExercise;
