import React from 'react'
import Navbar from './Navbar'
import gameimg from '../assets/gameimg.png'


const Feed = () => {
  return (
 <>
 <section className="without-download-container ">
    <p className="instand-play">Instant Play</p>



    <img src={gameimg} alt="/Game without download" className="game" />
    <img src={gameimg} alt="/Game without download" className="game" />
    <img src={gameimg} alt="/Game without download" className="game" />
    <img src={gameimg} alt="/Game without download" className="game" />
    <img src={gameimg} alt="/Game without download" className="game" />
    <img src={gameimg} alt="/Game without download" className="game" />



 </section>

  <section className="banner">
    <div className="banner-text">
    Games. Free. Now
    </div>
    <button className="download-banner">
        <p className="text-download">Download and Play</p>
    </button>

<div className="banner-imgs">
<img src={gameimg} alt="" className="banner-img1" />
<img src={gameimg} alt="" className="banner-img2" />

<img src={gameimg} alt="" className="banner-img3" />

<img src={gameimg} alt="" className="banner-img4" />

</div>
 
  </section>
 
 </>
  )
}

export default Feed