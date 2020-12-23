import React, { useState } from 'react'
//import components
import ServiceCard from '../components/ServiceCard'
//imported styles
import styled from 'styled-components'
import { Main } from '../styles/styles'
//import data
import { serviceData } from '../data/data'

const Services = () => {
    const [services, setServices] = useState(serviceData())
    const renderedServices = services.map((service) => (
        <ServiceCard service={service} key={service.id.toString()} />
    ))
    return (
        <Main id="main-content">
            <h2>Services</h2>
            {renderedServices}
        </Main>
    )
}

export default Services
