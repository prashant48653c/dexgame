import React from 'react'
import chat from '../assets/chat.svg'
import { useNavigate } from 'react-router-dom'

const Sidenav = () => {
 

  return (
    <aside className='sidenav'>


<div className="side-icons active">

  <a href="/"> <img className='side-icon active-icon '  src={chat} alt="community" /></a> 

</div>

<div className="side-icons">
 <a href="/com">  <img className='side-icon  ' src={chat} alt="community" /></a>

</div>

<div className="side-icons">
<a href="/u">  <img className='side-icon  ' src={chat} alt="community" /></a>


</div>

<div className="side-icons">
<a href="/com">  <img className='side-icon  ' src={chat} alt="community" /></a>


</div>
    </aside>
  )
}

export default Sidenav