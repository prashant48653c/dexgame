import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './component/Sidenav'
import Navbar from './component/Navbar'
import Feed from './component/Feed'
import { useNavigate } from 'react-router-dom'
import { Route,Router,Routes } from 'react-router-dom'
import Store from './component/Store'

function App() {
 
  return (
    <>
    <Sidenav/>
   
 

     <main className="main">
     <Navbar/> 
      {/* <Feed/> */}
      <Store/>
     </main>
  

   
   
    </>
  )
}

export default App
