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
      id: ''
      
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  addHouse(name, address, city, state, zip){
    const data = {name: name, address: address, city: city, state: state, zip: zip}
    Axios.post(`/api/houses`, data ).then(res => {
      this.state.house.push(data);
      this.props.history.push('/')
      this.setState({
        house: this.state.house
      })
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
            onChange={this.handleInput} 
            maxlength="2"/>
          <input 
            id='zip'
            type='text'
            placeholder='Zipcode'
            value={this.state.zip}
            onChange={this.handleInput} />

          <button onClick={() => this.addHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)} >Complete</button>
          </div>
    </div>
    )}
}
export default Wizard