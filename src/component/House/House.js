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
        <button>Delete</button>
      </div>
    )
  }
  export default House