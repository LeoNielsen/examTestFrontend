import React from 'react'
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='main'>
            <div className='main-container'>
              <div style={{ gridTemplateRows: "60% auto" }}>
              </div>
            <div className='section' style={{ gridTemplateRows: "60% auto" }}>

                <div className='header'>
                  <h1>Let's play</h1>
                  <h2>Create or join a game to start playing werewolf with your friends</h2>
                </div>

                <div className='content' style={{ gridTemplateRows: "60% auto" }}>
                  <button className='btn-lightpurple' style={{ maxWidth: "200px" }} onClick={event => window.location.href = "/harbours"}>Harbours</button>
                  <button className='btn-purple' style={{ maxWidth: "200px" }} onClick={event => window.location.href = "/allowners"}>All Boat Owners</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Home