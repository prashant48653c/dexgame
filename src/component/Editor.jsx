import React from 'react'
import chat from '../assets/chat.svg'

export const Editor = () => {
  return (
    <>
<section className="profile-editor">
    <h3>Edit profile</h3>
    <p>My Profile</p>

    <img src={chat} alt="" />


    <p>Change username</p>
    <input type="text" placeholder='John Lobby' />

    <p>Change username</p>
    <input type="email" placeholder='johnlobby23@gmail.com' />


    <img src={chat} alt="" className="icon" />


    <div className="buttons">
        <button>Cancel</button>
        <button className='save'>Save</button>
    </div>
</section>

    </>
  )
}
