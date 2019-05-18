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
                <a href="http://nccssvariables.surge.sh/" target="_blank" rel="noopener noreferrer">Day 03: CSS  Variables</a>
                <a href="http://ncarraycardio1.surge.sh/" target="_blank" rel="noopener noreferrer">Day 04: Array Cardio: 1</a>
                <a href="http://ncflexpanelgallery.surge.sh/" target="_blank" rel="noopener noreferrer">Day 05: Flex Panel Gallery</a>
                <a href="http://nctypeahead.surge.sh/" target="_blank" rel="noopener noreferrer">Day 06: Type Ahead</a>
                <a href="http://ncarraycardio2.surge.sh/" target="_blank" rel="noopener noreferrer">Day 07: Array Cardio: 2</a>
                <a href="http://nchtmlcanvas.surge.sh/" target="_blank" rel="noopener noreferrer">Day 08: HTML Canvas Fun</a>
                <a href="http://ncdevtooltricks.surge.sh/" target="_blank" rel="noopener noreferrer">Day 09: Dev Tool Tricks</a>
                <a href="http://nccheckmulitpleboxes.surge.sh/" target="_blank" rel="noopener noreferrer">Day 10: Check Mulitple Boxes</a>
          
            </div>
        </div>
    )
}

export default Home 