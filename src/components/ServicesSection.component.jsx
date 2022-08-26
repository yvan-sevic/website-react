import React, { Component } from 'react'
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {About, Description, Hide, Image} from '../styles'
import styled from 'styled-components'

const ServiceSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock" />
                            <h3>Save Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                     <Card>
                        <div className="icon">
                            <img src={teamwork} alt="clock" />
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="clock" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                </Cards>
            </Description>
        <Image>
            <img src={home2} alt="" />
        </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding:2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Card = styled.div`
flex-basis:15rem;
.icon {
    display:flex;
    align-items:center;
    h3 {
        margin-left:1rem;
        background-color:white;
        color:black;
        padding:1rem;
    }
}

`

export default ServiceSection