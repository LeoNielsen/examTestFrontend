import React from 'react'
import { useEffect, useState } from 'react'
import facade from '../apiFacade'

const AllOwners = () => {
    const [owners, setOwners] = useState([])
    let index = 0; 

    useEffect(() => {
        facade.fetchAllOwners().then((data) => setOwners(data))
    }, [])

    return (
        <div>
            {owners.map((data) => {
                return <div key={data.userName}>
                    <h4>{data.userName}</h4>
                    {data.boats.map((boat) => {
                        return <h5 key={index++}>{boat}</h5>
                    })}
                    <br />
                </div>
            })
            }
        </div>
    )
}

export default AllOwners