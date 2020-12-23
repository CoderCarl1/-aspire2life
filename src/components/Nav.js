import React from 'react'
//imported Styles
import styled from 'styled-components'
import { Navigation } from '../styles/styles'

const Nav = () => {
    return (
        <Navigation>
            <ul>
                <li>
                    <a>Logo</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Services</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
            </ul>
        </Navigation>
    )
}

export default Nav
