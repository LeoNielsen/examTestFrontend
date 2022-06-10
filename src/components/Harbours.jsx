import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/Harbours.css"
import facade from '../apiFacade';
import DisplayCard from './DisplayCard';
import { useNavigate, useLocation } from 'react-router-dom';

const Harbours = () => {
    const navigate = useNavigate();
    const [harbours, setHarbours] = useState([]);

    useEffect(() => {
        facade.getHarbours().then((harbour) => {
            setHarbours(harbour)
        })
    },[])

    const onclick = (event) => {
        navigate("/harbour", { state: event.currentTarget.id })
    }


  return (
    <div>
        <div className='card-list'>
            {
            harbours.map((data) => {
                return <div key={data.id}>
                    <DisplayCard id={data.id} item={data} onclick={onclick} />
                    </div>
            })
            }
        </div>
        
    </div>
  )
}

export default Harbours