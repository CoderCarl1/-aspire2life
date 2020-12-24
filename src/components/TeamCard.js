import React from 'react'

const TeamCard = ({ person }) => {
    return (
        <article>
            <h3>
                {person.firstName} {person.lastName}
            </h3>
            <p>{person.about}</p>
            <p>{person.locations.map((location) => location)}</p>
            {/* <picture> */}
            {/* <source> */}
            <img
                src={person.image}
                alt={'photo of ' + person.firstName + ' ' + person.lastName}
            />
            {/* </picture> */}
        </article>
    )
}

export default TeamCard
