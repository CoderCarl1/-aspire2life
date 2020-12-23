import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { StyledFaq } from '../styles/styles'

const FaqComponent = ({ faq }) => {
    // const [active, setActive] = useState(false)
    // const faqRef = useRef(null)
    // console.log(faq.id, faq)

    // const handleActive = () => {
    //     setActive(!active)
    // }

    // const handlekeyDown = (event) => {
    //     setActive(!active)
    //     if (event.keycode == 13) {
    //         faqRef.current.focus()
    //     }
    // }

    return (
        <StyledFaq>
            <h3 className="question">{faq.question}</h3>
            <p className="answer">{faq.answer}</p>
            <div className="faq-line"></div>
        </StyledFaq>
    )
}

export default FaqComponent
