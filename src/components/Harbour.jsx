import { React, useEffect, useState } from 'react'
import "../styles/Harbours.css"
import Boat from './Boat';
import facade from '../apiFacade';

const Harbour = () => {
    const [boats, setBoats] = useState([]);

    useEffect(() => {
        facade.fetchAllBoatByHarbour(1).then((data) => {
            setBoats(data)
        })
    }, [])

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