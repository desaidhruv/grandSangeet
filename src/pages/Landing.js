import React from 'react'
import Explore from "../components/sections/Explore"
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Team from '../components/sections/Team'
import Community from '../components/sections/Community'
import Gallery from '../components/sections/Gallery'
import Contact from '../components/sections/Contact'

export default function Landing() {
    return (
        <>
        <Hero />
        {/* <Explore /> */}
        <Services />
        <Gallery />
        <About />
        <Team />
        <Community />
        <Contact/>
        
        </>
    )
}
