import React, { useState } from 'react'
import styled from 'styled-components'

const FaqComponent = ({ faq }) => {
    const [active, setActive] = useState(false)
    console.log(faq.id, faq)

    const handleActive = () => {
        return setActive(!active)
    }

    const handlekeyDown = (event) => {
        if (event.keycode == 13) {
            this.focus()
        }
    }

    return (
        <FAQ>
            <h3
                className="question"
                onClick={handleActive}
                onKeyDown={handlekeyDown}
            >
                {faq.question}
            </h3>
            <p className={`answer {active ? "openFaq" : "closeFaq"}`}>
                {faq.answer}
            </p>
            <div className="faq-line"></div>
        </FAQ>
    )
}

const FAQ = styled.article`
    border-bottom: 0.5px solid #5c5c5c;
    padding: 1rem;
    width: 100%;
    /* background: #c9c9c9; */
    box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
`

export default FaqComponent
