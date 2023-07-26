import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import React from 'react'

const Store = () => {
  return (
    <>
 <div className="main-container store">


    <img src={gameimg} alt="" className="slideing-img" />
 


  <section className="favorite-games">
    <h3>Top Favorites</h3>
    <span className="slide-icons">
        <img src={chat} alt="" className="slide-icon" />
        <img src={chat} alt="" className="slide-icon" />

    </span>
  </section>

  <section className="favorite-game">
    <article className="fav-game">
       <img src={gameimg} alt="" className="fav-img" />
       <div>
       <p>#1 Top 2015</p>
       <h3>The witcher 3: Wild hunt </h3>
       <p className="genre">Action,Adventure</p>
       </div>
      
    </article>
  </section>


  <article className="suggested-games">

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />
<div>
<h3>Game of throne</h3>
<p className='description' >Unleash your criminal ambitions and dominate the streets of Los Santos in the action-packed GTA 5.</p>
</div>

</div>

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />

<h3>Grand Thief Auto</h3>
</div>



  </article>







  <section className="suggested-game-container">
  <div className='heading'>  
    <img src={chat} id='suggested-icon' alt="" />
    <h2 className="suggested-title">Games just for you</h2>
  </div>

<article className="suggested-games">

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />
<h3>Game of throne</h3>
<p>Action,Adventure</p>
<button >Download and Play</button>
</div>

<div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />

<h3>Grand Thief Auto</h3>
<p>Action,Mafia</p>
<button >Download and Play</button>
</div>



  </article>
</section>





<section className="dev-games">
<h2>Developer</h2>

<article className="dev-info">

    <img src={gameimg} alt="" className="dev-logo" />
    <div className="dev-game">

        <div className="dev-game1">
            <img src={gameimg} alt="" />
            <h3>Grand Thief Auto</h3>
        </div>

        <div className="dev-game1">
            <img src={gameimg} alt="" />
            <h3>Grand Thief Auto</h3>
        </div>

        <div className="dev-game1">
            <img src={gameimg} alt="" />
            <h3>Grand Thief Auto</h3>
        </div>
        
    </div>
</article>
</section>

    </div>
    </>
  )
}

export default Store