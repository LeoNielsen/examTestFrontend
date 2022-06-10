import { React, useEffect, useState } from 'react'
import "../styles/Harbours.css"
import Boat from './Boat';
import facade from '../apiFacade';
import { useLocation } from 'react-router-dom';

const Harbour = () => {

    const location = useLocation();

    const [boats, setBoats] = useState([]);
    const [harbourId, setHarbourId] = useState()

    useEffect(() => {
        setHarbourId(location.state);
    }, [])

    useEffect(() => {
        if (harbourId != undefined) {
            facade.fetchAllBoatByHarbour(harbourId).then((data) => {
                setBoats(data)
            })
        }
    }, [harbourId])

    return (
        <div>
            <div className='card-list' >
                {
                    boats.map((data) => {
                        return <div key={data.id}>
                            <Boat id={data} item={data} />
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Harbour