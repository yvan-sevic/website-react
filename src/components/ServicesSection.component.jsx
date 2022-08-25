import React, { Component } from 'react'
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'


const ServiceSection = () => {
    return (
        <div className='services'>
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="clock" />
                            <h3>Save Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                     <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="clock" />
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="clock" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        
                    </div>
                    </div>
                </div>
            </div>
        <div className="image">
            <img src={home2} alt="" />
        </div>
        </div>
    )
}

export default ServiceSection