 // components/Foods/FoodList.js

 import React, { Component } from 'react';
 import axios from 'axios';
 import { Link } from 'react-router-dom';
 import AddFood from './AddFood';
 
 
 class FoodList extends Component {
   constructor(){
       super();
       this.state = { listOfFoods: [] };
   }
 
   getAllFoods = () =>{
     axios.get(`"http://ironhealth.herokuapp.com/api/Foods`)
     .then(responseFromApi => {
       this.setState({
         listOfFoods: responseFromApi.data
       })
     })
     .catch((err)=>{
         console.log(err);
     })
   }
 
   componentDidMount() {
     this.getAllFoods();
   }
 
   render(){
     return(
       <div>
         <div style={{width: '60%', float:"left"}}>

           { this.state.listOfFoods.map((food, index) => {
             return (
               <div key={food._id}>
                 <Link to={`/Foods/${food._id}`}>
                   <h3>{food.title}</h3>
                 </Link>
                 <p style={{maxWidth: '400px'}} >{food.description} </p>
               </div>
             )})
           }
         </div>

         <div style={{width: '40%', float:"right"}}>         
             <AddFood getData={() => this.getAllFoods()}/>
         </div>
       </div>
     )
   }
 }
 
 export default FoodList;