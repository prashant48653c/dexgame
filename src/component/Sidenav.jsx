import React from 'react'
import chat from '../assets/chat.svg'

const Sidenav = () => {
  return (
    <aside className='sidenav'>


<div className="side-icons active">
<img className='side-icon active-icon ' src={chat} alt="community" />

</div>

<div className="side-icons">
<img className='side-icon  ' src={chat} alt="community" />

</div>

<div className="side-icons">
<img className='side-icon  ' src={chat} alt="community" />

</div>

<div className="side-icons">
<img className='side-icon  ' src={chat} alt="community" />

</div>
    </aside>
  )
}

export default Sidenav