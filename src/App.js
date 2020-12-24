//import packages
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import styles
import './styles/styles.scss'
import GlobalStyle from './styles/GlobalStyle'
//import components/pages
import Nav from './components/Nav'
import Home from './pages/Home'
import Faq from './pages/FAQ'
import Services from './pages/Services'
import Team from './pages/Team'
import ContactUs from './pages/ContactUs'

function App() {
    return (
        <div className="app">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/faqs">
                    <Faq />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
                <Route exact path="/meet-the-team">
                    <Team />
                </Route>
                <Route exact path="/contact-us">
                    <ContactUs />
                </Route>
            </Switch>
            {/* <GlobalStyle />
            <Nav />
            <Home />
            <Faq />
            <Services />
            <Team />
            <ContactUs /> */}
        </div>
    )
}

export default App
