import React from 'react'

function House(props) {
  const houseProps = props
    return(
      <div>
        <p>{houseProps.address}</p>
        <p>{houseProps.name}</p>
        <p> {houseProps.city}</p>
        <p>{houseProps.state}</p>
        <p> {houseProps.zip}</p>
        <button onClick={() => props.delete(houseProps.id)}>Delete</button>
      </div>
    )
  }
  export default House