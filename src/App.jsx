import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './component/Sidenav'
import Navbar from './component/Navbar'
import Feed from './component/Feed'

function App() {
 

  return (
    <>
     <Sidenav/>

     <main className='main'>

<Navbar/>
<Feed/>


    </main>
   
    </>
  )
}

export default App
