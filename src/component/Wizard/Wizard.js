import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

class Wizard extends Component {
  constructor(){
    super()

    this.state = {
      house: [],
      name: ``,
      address: ``,
      city: ``,
      state: ``,
      zip: ``,
      
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  createHouse() {
    const{ input } =this.state;
    Axios.post('/api/houses', {house: input}).then(res => {  
      this.setState({
        house: res.data,
        input: ''
      })
      this.props.history.push('/')    
    })
  }

  render() {
    return(
      <div>
        
        <div>
          Add New Listing
          
          <Link to={`/`}><button>Cancel</button></Link> 

        </div>
          <div>
          <input 
            id='name'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleInput} />
          <input 
            id='address'
            type='text'
            placeholder='Address'
            value={this.state.address}
            onChange={this.handleInput} />
          <input 
            id='city'
            type='text'
            placeholder='City'
            value={this.state.city}
            onChange={this.handleInput} />
          <input 
            id='state'
            type='text'
            placeholder='State'
            value={this.state.state}
            onChange={this.handleInput} />
          <input 
            id='zip'
            type='text'
            placeholder='Zipcode'
            value={this.state.zip}
            onChange={this.handleInput} />

          <button onClick={(e) => this.state.createHouse()} >Complete</button>
          </div>
    </div>
    )}
}
export default Wizard