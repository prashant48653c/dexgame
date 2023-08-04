import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './component/Sidenav'
import Navbar from './component/Navbar'
import Feed from './component/Feed'
import { useNavigate } from 'react-router-dom'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Store from './component/Store'
import Downloader from './component/Downloader'
import { Editor } from './component/Editor'
import Profile from './component/Profile'
import Unlock from './component/Unlock'
import Community from './component/Community'
function App() {
 
  return (
    <>

<Router>

<Sidenav/>


<main className="main">
<Navbar/> 

<Routes>

<Route  path='/' element={   <Feed/>  }  />
<Route  path='/store' element={   <Store/>  }  />

<Route  path='/downloader' element={   <Downloader/>  }  />
<Route  path='/editor' element={   <Editor/>  }  />
<Route  path='/profile' element={   <Profile/>  }  />

<Route  path='/unlock' element={   <Unlock/>  }  />

<Route path='/community' element={ <Community/> } />

</Routes>
</main>



</Router>

 

   
 

   
   
    </>
  )
}

export default App
