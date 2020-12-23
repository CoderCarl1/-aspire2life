import styled from 'styled-components'

//styled components
export const Main = styled.main`
    min-height: 90vh;
    /* display: flex; */
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    /* color: white; */
`

export const StyledFaq = styled.article`
    /* border-bottom: 0.5px solid #5c5c5c; */
    padding: 1rem;
    width: 100%;
    /* background: #c9c9c9; */
    /* box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.2); */
    /* cursor: pointer; */
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
`
export const StyledNav = styled.nav`
    height: 10vh;
    width: 100vw - 10rem;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    background-color: black;
    #logo {
        font-size: 2.6rem;
        font-family: 'Lobster Two', cursive;
        margin: 0;
    }
    ul {
        width: 70vw;
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin-right: 5rem;
        text-align: center;
        a {
            /* background: white; */
            color: white;
            /* margin-left: 10rem; */
            position: relative;
            text-decoration: none;
            &:hover {
                background: rgba(35, 45, 192, 0.5);
                color: #fff;
            }
        }
    }
`
