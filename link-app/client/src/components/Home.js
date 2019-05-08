import React from 'react'
import me from './me.jpg'



const Home = () => {
    return (
        <div className="home-grid">
            <div className="about">
                <p className="about-me">Hello, my name is Nicole Cedano, and I am currently completing
                    the JavaScript30 challenge created by Wes Bos. I am a Full-Stack Developer
                    freshening up my vanilla JS skills. Thnx 4 visiting!
                </p>
                <img className="portrait" src={me} alt="self" />
                <p>Check out my website: <a href="http://nicolecedano.surge.sh/" target="_blank" rel="noopener noreferrer">Nicole Cedano</a></p>
            </div>
            <div className="links">
                <a href="http://ncdrumkit.surge.sh/" target="_blank" rel="noopener noreferrer">Day 01: Drum Kit</a>
                <a href="http://ncvanillajsclock.surge.sh/" target="_blank" rel="noopener noreferrer">Day 02: Clock</a>
            </div>
        </div>
    )
}

export default Home 