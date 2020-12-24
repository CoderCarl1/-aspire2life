//import packages
import React from 'react'
import { Link } from 'react-router-dom'
//imported Styles
import styled from 'styled-components'
import { StyledNav } from '../styles/styles'

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/">
                <h2 id="logo">Logo</h2>
            </Link>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/faqs">faqs</Link>
                </li>

                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/meet-the-team">Meet the Team</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Nav
