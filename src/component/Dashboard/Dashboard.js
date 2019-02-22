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
  }

  componentDidMount() {
    Axios.get('/api/houses').then(res => [
      this.setState({
        house: res.data
      })
    ])
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
      />
      )

  })
    return (
      <div>
        Dashboard
        {mapHouses}        
        
        <button onClick={() => this.props.history.push('/wizard')}> Cancel </button>
      </div>
    )}
}


export default Dashboard