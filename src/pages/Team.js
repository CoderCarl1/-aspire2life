import React, { useState } from 'react'
import TeamCard from '../components/TeamCard'
//imported styles
import styled from 'styled-components'
import { Main } from '../styles/styles'
//images/data for Demonstration
import Sue from '../images/SueImage.jpg'
import Carl from '../images/CarlImage.jpeg'
import Chloe from '../images/ChloeImage.jpg'
import Hugh from '../images/HughImage.jpeg'
// import { teamData } from '../data/data'
const teamData = [
    {
        firstName: 'Sue',
        lastName: 'Davidson',
        about: 'Loves Gardening, Cats, Photography, and helping people',
        locations: ['Hervey Bay', 'Maryborough', 'South Burnett'],
        image: Sue ,
    },
    {
        firstName: 'Carl',
        lastName: 'Davidson',
        about: 'Loves Kids, Coding, and new things',
        locations: ['Melbourne'],
        image: Carl,
    },
    {
        firstName: 'Chloe',
        lastName: 'Davidson',
        about: 'Loves Drawing, Dancing, and being CRAZY',
        locations: ['Child Care', 'Caulfield', 'Melbourne'],
        image: Chloe,
    },
    {
        firstName: 'Hugh',
        lastName: 'Davidson',
        about: 'Loves Cars',
        locations: ['Child Care', 'Caulfield', 'Melbourne'],
        image: Hugh,
    },
]

const Team = () => {
    const [team, setTeam] = useState(teamData)

    const teamMembers = team.map((person, index) => (
        <TeamCard person={person} key={index.toString()} />
    ))

    return (
        <Main id="main-content">
            <h1>Meet the Team!</h1>
            {teamMembers}
        </Main>
    )
}

export default Team
