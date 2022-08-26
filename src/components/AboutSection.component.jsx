import React from 'react'
import home1 from '../img/home1.png'
import {About, Description, Hide, Image} from '../styles'

const AboutSection = () => {
    return (
        <About>
        <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                    </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come</h2>
                    </Hide>
                <Hide>
                <h2>true.</h2>
                </Hide>
            </div>
        <p>We have professionals with amazing skills.</p>
        <button>Contact Us</button>
        </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </About>
    )
}


export default AboutSection;