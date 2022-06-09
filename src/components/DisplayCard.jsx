import React from 'react'
import "../styles/DisplayCard.css"

const DisplayCard = ({id, item, onclick}) => {
  return (
    <div className='card-container' id={id} onClick={onclick}>
        <h3>{item.name}</h3>
        <br/>
        <h5>Address: {item.address}</h5>
        <h5>capacity: {item.capacity} </h5>
        <h5>---------------------------------------------------------</h5>
        <h5>Boats: </h5>
        {item.boats.map((boat) => {
            return <h5>{boat}</h5>
        })}

        
    </div>
  )
}

export default DisplayCard