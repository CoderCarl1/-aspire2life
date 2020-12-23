import React from 'react'
import FaqComponent from '../components/FaqCard'
//imported styles
import styled from 'styled-components'
import { Section } from '../styles/styles'

const FAQ = ({ faqs }) => {
    const FAQS = faqs.map((faq) => <FaqComponent faq={faq} key={faq.id} />)

    return (
        <Section>
            <h2>
                Any Questions? <span>FAQ</span>
            </h2>
            {FAQS}
        </Section>
    )
}

export default FAQ
