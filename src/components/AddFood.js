// components/foods/Addfood.js

import React, { Component } from 'react';
import axios from 'axios';


class AddFood extends Component {
  constructor(props){
      super(props);
      this.state = { type: "", description: "" };
  }
   
  

  handleFormSubmit = (event) => {
    event.preventDefault();
    // const {type, description} = this.state;
    const type = this.state.type;
    const description = this.state.description;
    axios.post(process.env.BASE_URL+"/foods", {type, description })
    .then( () => {
        this.props.getData();
        this.setState({type: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
    //   ^ this is just fancy syntax for the 2 lines below
    //   const name = event.target.name;
    //   const value = event.target.value;

      this.setState({[name]: value});
  }

  render(){
    return(
      
      <div>

        <form onSubmit={this.handleFormSubmit}>

          <label>Type:</label>

          <input type="text" name="type" value={this.state.type} onChange={ e => this.handleChange(e)}/>

          <label>Description:</label>

          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />

          <input type="submit" value="Submit" />

        </form>

      </div>
    )
  }
}

export default AddFood;

