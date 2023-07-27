import gameimg from '../assets/gameimg.png'
import chat from '../assets/chat.svg'
import React from 'react'

const Downloader = () => {
  return (
    <>
<div className="main-container">

    <section className="grid-two-colume about">


        <article className="about-game">
<div className="game-images">
    <img src={gameimg} alt="" />
    <div className="other-game-images">
    <img src={gameimg} alt="" />
    <img src={gameimg} alt="" />
    <img src={gameimg} alt="" />

    </div>
</div>


<section className="game-detail">
    <h2>About the game</h2>
    <p>Experience the ultimate criminal adventure in the thrilling world of GTA 5! Get ready to immerse yourself in the sprawling city of Los Santos, where chaos reigns and opportunities for mayhem await at every turn. Take on heart-pounding heists, engage in adrenaline-fueled car chases, and unleash explosive shootouts in a captivating open-world environment. With its gripping storyline, stunning graphics and unparalleled freedom....</p>

    <button>Show more 
    <img src={chat} alt="" />
        
         </button> 
</section>

<section className="meet-the-dev">
<h2>Meet the developer</h2>
<div className="logo-rate">
    <img src={gameimg} alt="" />
    <div>
    <h4>Rockstar Game</h4>
    <p>Realeased Date: Sep 17, 2013</p>
    </div>
  
</div>
</section>



<section className="reviews">
<h2>Reviews</h2>
<div className="rating">
    <div className="box">
        <p>Total reviews</p>
        <h4>10.0k</h4>
       
    </div>

    <div className="box">
        <p> Average rating</p>
        <h4>4.0</h4>
        
        * * * *
        
       
    </div>
</div>


<div className="comment">
    <div className="pp-detail">
        <img src={chat} alt="" />
        <p>Jasmin Homo</p>
     
    </div>



    <div className="actual-comment">
        <p>There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.</p>
    </div>
    <div className="date">
        <p>2076-09-54</p>
    </div>
</div>



<div className="comment">
    <div className="pp-detail">
        <img src={chat} alt="" />
        <p>Jasmin Homo</p>
     
    </div>



    <div className="actual-comment">
        <p>There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.</p>
    </div>
    <div className="date">
        <p>2076-09-54</p>
    </div>
</div>
<button className="show-more">Show More  
<img src={chat} alt="" />
</button>
</section>


<section className="store-more-game">
    <h2>More games</h2>
    <div className="game-list">
        <div className="store-games">
            <img src={gameimg} alt="" />
            <div className='detail-box'>

    <h3>Red Dead Redemption 2</h3>
    <p>gh exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail wi</p>
    <button>Download Now</button>

            </div>
        </div>

        <div className="store-games">
            <img src={gameimg} alt="" />
            <div className='detail-box'>

    <h3>Red Dead Redemption 2</h3>
    <p>gh exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail wi</p>
    <button>Download Now</button>

            </div>
        </div>


    </div>
    <button className="show-more">Show More</button>
</section>











        </article>

        <aside className="download-game">

        </aside>
    </section>
</div>

    </>
  )
}

export default Downloader