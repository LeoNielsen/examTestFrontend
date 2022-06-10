import React from 'react'
import "../styles/DisplayCard.css"

const Boat = ({ id, item, onclick }) => {

    let index = 0;

    return (
        <div className='card-container' id={id} onClick={onclick}>
            <h3>{item.name}</h3>
            <br />
            <h5>brand: {item.brand}</h5>
            <h5>make: {item.make} </h5>
            <h5>name: {item.name} </h5>
            <h5>---------------------------------------------------------</h5>
            <h5>owners: </h5>
            {item.owners.map((data) => {
                return <h5 key={index++}>{data}</h5>
            })}


        </div>
    )
}

export default Boat