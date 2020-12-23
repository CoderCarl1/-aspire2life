//import packages
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
//import styles
import './styles/styles.scss'
import GlobalStyle from './styles/GlobalStyle'
//import components/pages
import Nav from './components/Nav'
import Faq from './pages/FAQ'
//import data
import { faqData } from './data/faq'

function App() {
    const [faqs, setFaqs] = useState(faqData())

    return (
        <div className="app">
            <GlobalStyle />
            <Nav />

            <Faq faqs={faqs} />
        </div>
    )
}

export default App
