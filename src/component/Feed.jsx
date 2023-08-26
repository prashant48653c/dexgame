import React, { useEffect } from 'react'
import Navbar from './Navbar'
import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import { fetchData } from '../fetched/fetch'
import { setGames } from '../slices/feedslicer'
import { useDispatch,useSelector } from 'react-redux'

const Feed = () => {
const dispatch=useDispatch()
const games=useSelector((state)=> state.games)

  useEffect( ()=>{
  
      fetchData("games").then((res)=>{
        console.log(res.results)

        dispatch(setGames(res.results))
       
      })
    

  },[])
  return (
 <>
 <div className="main-container">

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



<section className="suggested-game-container">
  <div className='heading'>  
    <img src={chat} id='suggested-icon' alt="" />
    <h2 className="suggested-title">Games just for you</h2>
  </div>

<article className="suggested-games">

{games.length === 0 ? (
  <p>No games available</p>
) : (
  games.map((game, i) => (
    <div className="suggested-game" key={i} >
    <img src={game.background_image} alt="game_img" className="suggested-game-img" />
    
    <h3>{game.name}</h3>
   <p>Action,Adventure</p>
    <button >Download and Play</button>
    </div> 
  ))
)}


{/* <div className="suggested-game">
<img src={gameimg} alt="" className="suggested-game-img" />

<h3>Grand Thief </h3>
<p>Action,Mafia</p>
<button >Download and Play</button>
</div> */}

  </article>
</section>



<section className="more-games">
  <h2>More games</h2>

  <article className="more-game">

    { games.length === 0 ?
     ( <p>No results</p> ):
      (
        games.map((game,i)=>{
          return (
<div className="more-game-div" key={i} >
        <img src={game.background_image} alt="game_img" />
      </div>
          )

        })
        
      )
    }

    
  </article>

</section>


</div>
 
 </>
  )
}

export default Feed