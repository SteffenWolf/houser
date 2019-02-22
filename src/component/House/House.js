import React from 'react'

function House(props) {
  const houseProps = props
    return(
      <div>
        {houseProps.address}
        {houseProps.name}
        {houseProps.city}
        {houseProps.state}
        {houseProps.zip}
      </div>
      <button>Delete</button>
    )
  }
  export default House