import React, { useEffect } from 'react'
import gameimg from '../assets/gameimg.png'
import { useDispatch, useSelector } from 'react-redux'


const Profile = () => {
const {userData}=useSelector(state=>state.auths)
  const dispatch=useDispatch()
  
console.log(userData)
 
  return (
    <>
<main className="main-container">
<main className="profile">

<section className="profile-cover-container">
<img src={gameimg} alt="" />
<div className="user-detail">
<div className="user-info">
<img src={gameimg} alt="" />
<div>

  <h3>Avinash Belbase</h3>
<button>user</button>
 


  <p>avinash34@gmail.com</p>
 
</div>



</div>

</div>

</section>


<section className="user-activity-container">
taratara
</section>

</main>
</main>
    </>
  )
}

export default Profile