import React, { Component } from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
        <House />
        <Link to={`/wizard`}><button>Add New Property</button></Link> 
      </div>
    )}
}
export default Dashboard