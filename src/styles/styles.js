import styled from 'styled-components'

//styled components
export const Section = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

export const Navigation = styled.nav`
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