import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/Harbours.css"
import facade from '../apiFacade';
import DisplayCard from './DisplayCard';

const Harbours = () => {

    const [harbours, setHarbours] = useState([]);

    useEffect(() => {
        facade.getHarbours().then((harbour) => {
            setHarbours(harbour)
        })
    },[])

    const onclick = () => {
        window.location.href = "/harbour"
    }


  return (
    <div>
        <div className='card-list'>
            {
            harbours.map((data) => {
                return <DisplayCard id={data.id} item={data} onclick={onclick} />
            })
            }
        </div>
        
    </div>
  )
}

export default Harbours