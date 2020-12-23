import React from 'react'

const serviceCard = ({ service }) => {
    return (
        <div>
            <h3>this is a service card</h3>
            <p>{service.id}</p>
            <p>{service.description}</p>
            <p>{service.img}</p>
        </div>
    )
}

export default serviceCard
