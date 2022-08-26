import React from "react";
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'
import styled from "styled-components";
import {Link} from 'react-router-dom'

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work">
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work">
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height:100vh;
    overflow:hidden;
    padding:5rem 10rem;
    background-color:white;
`

const Movie = styled.div`
    padding-bottom:10rem;
    h2 {
        color:#000;
        padding:1rem 0rem;
    }
    .line {
        height:0.5rem;
        background-color:#ccc;
        margin-bottom:3rem;
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`

export default OurWork;
