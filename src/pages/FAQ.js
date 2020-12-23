import React, { useState } from 'react'
import FaqCard from '../components/FaqCard'
//imported styles
import styled from 'styled-components'
import { Main } from '../styles/styles'
//import data
import { faqData } from '../data/data'

const FAQ = () => {
    const [faqs, setFaqs] = useState(faqData())
    const FAQS = faqs.map((faq) => (
        <FaqCard faq={faq} key={faq.id.toString()} />
    ))

    return (
        <Main id="main-content">
            <h2>
                Any Questions? <span>FAQ</span>
            </h2>
            {FAQS}
        </Main>
    )
}

export default FAQ
