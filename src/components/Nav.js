import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <Navigation>
            <ul>
                <li>Logo</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </Navigation>
    )
}

const Navigation = styled.nav`
    border: 1px solid red;
    height: 10vh;
    min-width: 100vw;
    ul {
        display: flex;
        list-style: none;
        li {
            background: white;
            color: black;
            &:hover {
                background: blue;
                color: white;
            }
        }
    }
`

export default Nav
