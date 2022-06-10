import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBoat = ({admin}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!admin) {
            navigate("/login");
        }
    },[])



  return (
    <div>CreateBoat</div>
  )
}

export default CreateBoat