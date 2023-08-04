import React from 'react'
import chat from '../assets/chat.svg'
import { useNavigate,Link } from 'react-router-dom'

const Sidenav = () => {
 const navigate=useNavigate();

  return (
    <aside className='sidenav'>


<div className="side-icons active">

  <Link to="/"> <img className='side-icon active-icon '  src={chat} alt="community" /></Link> 

</div>

<div className="side-icons">
 <Link  to="/community">  <img className='side-icon  ' src={chat} alt="community" /></Link>

</div>

<div className="side-icons">
<Link to="/store">  <img className='side-icon  ' src={chat} alt="community" /></Link>


</div>

<div className="side-icons">
<Link  to="/profile">  <img className='side-icon  ' src={chat} alt="community" /></Link>


</div>
    </aside>
  )
}

export default Sidenav