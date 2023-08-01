import React from 'react'
import gameimg from '../assets/gameimg.png'


const Profile = () => {
  return (
    <>

<main className="profile">

<section className="profile-cover-container">
<img src={gameimg} alt="" />
<div className="user-detail">
<div className="user-info">
<img src={gameimg} alt="" />
<div>
  <h3>Avinash Belbase</h3>
  <p>homogmei.com</p>
</div>
</div>

<button>user</button>
</div>

</section>


<section className="user-activity-container">
taratara
</section>

</main>

    </>
  )
}

export default Profile