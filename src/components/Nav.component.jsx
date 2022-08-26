import React from "react"
import styled from "styled-components"
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <NAV>
            <h1><a href="#" id="logo">Capture</a></h1>
            <ul>
                <li><Link className="link" to="/about">About Us</Link></li>
                <li><Link className="link" to="/work">Our Work</Link></li>
                <li><Link className="link" to="/contact">Contact Us</Link></li>
            </ul>
        </NAV>
    )
};

const NAV = styled.nav`
    min-height:10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:1rem 10rem;
    background-color: #282828;
    a{
        color:white;
        text-decoration:none;
    }
    ul{
        display:flex;
        list-style:none;
    }
    h1 {
        font-size:1.5rem;
        font-weight:lighter;
    }
    li {
        padding-left:10rem;
        position:relative
    }
`

export default Nav