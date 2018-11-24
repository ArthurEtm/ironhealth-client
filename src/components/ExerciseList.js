 // components/Exercises/ExerciseList.js

 import React, { Component } from 'react';
 import axios from 'axios';
 import { Link } from 'react-router-dom';
 import AddExercise from './AddExercise';
 
 class ExerciseList extends Component {
   constructor(){
       super();
       this.state = { listOfExercises: [] };
   }
 
   getAllExercises = () =>{
     axios.get(`https://ironhealth.herokuapp.com/api/exercises`)
     .then(responseFromApi => {
       this.setState({
         listOfExercises: responseFromApi.data
       })
     })
     .catch((err)=>{
         console.log(err);
     })
   }

   addNewExercise = (ex) => {
     
     this.getAllExercises();
   }
 
   componentDidMount() {
     this.getAllExercises();
   }
 
   render(){
     console.log(this.state)
     return(
       <div>
         <div style={{width: '60%', float:"left", height: "80vh"}}>
         <h2 style={{textTransform: "uppercase", textAlign: "center"}}>Your exercises</h2>
           { this.state.listOfExercises.map((exercise, id) => {
          
             return (
               <div key={id} className="single-exercise">
                 <Link className="btn btn-block btn-info" to={`/Exercises/${exercise._id}`}>
                   <h3 className="header-ex">Exercise {id} </h3>
                 </Link>
                 <h2 className="header-ex">Description</h2>
                 <p>Reps: {exercise.reps || 100}</p>
                 <p>Sets: {exercise.sets || 20}</p>
                 <p>Weight: {exercise.weight || 30}</p>
               </div>
             )})
           }
         </div>
         <div style={{width: '40%', float:"right", height: "80vh"}}>
             <AddExercise getData={() => this.getAllExercises()} addNew = { this.addNewExercise}/>
         </div>
       </div>
     )
   }
 }
 
 export default ExerciseList;