import React, { Component } from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import Axios from 'axios';

class Dashboard extends Component {
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

    this.destroyHouse = this.destroyHouse.bind(this)
  }

  componentDidMount() {
    Axios.get('/api/houses').then(res => [
      this.setState({
        house: res.data,
        name: ``,
        address: ``,
        city: ``,
        state: ``,
        zip: ``,
      })
    ])
  }

  destroyHouse(id) {
    Axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        house: this.state.house
      })
      this.componentDidMount()
    })
  }


  

  render() {
    const {houses} = this.state
    const mapHouses = this.state.house.map(house => {
      return (
        
        <House 
          address={house.address}
          name={house.name}
          city={house.city}
          state={house.state}
          zip={house.zip}
          id={house.id}
          delete={this.destroyHouse}
        />
      )

  })
    return (
      <div>
        Dashboard
        {mapHouses}        
        
        <button onClick={() => this.props.history.push('/wizard')}> Add New Property </button>
      </div>
    )}
}


export default Dashboard