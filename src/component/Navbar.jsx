import React from 'react'
import chat from '../assets/chat.svg'

const Navbar = () => {
  return (
    <nav className='nav'>

      <div className="search-bar">
        <img src={chat} alt="" className="search-icon" />
        <input type="text" className="search-game" placeholder='Search for any games' />
      </div>

      <img src={chat} alt="" className="avatar" />



    </nav>
  )
}

export default Navbar