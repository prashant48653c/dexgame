import React from 'react'
import chat from '../assets/chat.svg'
import { setUserData } from '../slices/authslicer'
import { useSelector } from 'react-redux'

const Navbar = () => {
const {userData}=useSelector(state=>state.auths)
console.log(userData)

if(userData){
  return (
    <nav className='nav'>

      <div className="search-bar">
        <img src={chat} alt="" className="search-icon" />
        <input type="text" className="search-game" placeholder='Search for any games' />
       
      </div>

      <img src={userData[0].user.photoURL } alt="profile" className="avatar" />



    </nav>
  )
}else{
  console.log("Loading")
}
} 

export default Navbar