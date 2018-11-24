// components/exercises/exerciseDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditExercise from './EditExercise';

class ExerciseDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleExercise();
  }

  getSingleExercise = () => {
      const { params } = this.props.match;
      axios.get(`"http://ironhealth.herokuapp.com/api/exercises/${params.id}`)
      .then( responseFromApi =>{
          const theExercise = responseFromApi.data;
          this.setState(theExercise);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.title){
        this.getSingleExercise();
        } else {
        //                                                    {...props} => so we can have 'this.props.history' in Edit.js
        //                                                                                          ^
        //                                                                                          |
        return <EditExercise theExercise={this.state} getTheExercise={this.getSingleExercise} {...this.props} />
        }
    }


    // DELETE exercise:
  deleteExercise = () => {
    const { params } = this.props.match;
    axios.delete(`"http://ironhealth.herokuapp.com/api/exercises/${params.id}`)
    .then( responseFromApi =>{
        this.props.history.push('/exercises'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }
   


  render(){
    return(
      <div>

        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <button onClick={() => this.deleteExercise()}>Delete exercise</button>

        {this.renderEditForm()}

        


        <Link to={'/exercises'}>Back to exercises</Link>
      </div>
    )
  }
}

export default ExerciseDetails;