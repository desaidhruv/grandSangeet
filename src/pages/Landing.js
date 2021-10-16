import React from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Team from '../components/sections/Team'
import Community from '../components/sections/Community'
import Gallery from '../components/sections/Gallery'
import Contact from '../components/sections/Contact'
import {WhyWeAre} from '../components/sections/WhyWeAre'
import Footer from '../components/sections/Footer'
import { Testimonial } from '../components/sections/Testimonial'
import Work from '../components/sections/Work'

export default function Landing() {
    return (
        <>
        <Hero />
        <WhyWeAre />
        <Services />
        <Work/>
        <Gallery /> 
        <Testimonial/>
        <About />
        <Team />
        <Community />
        <Contact />
        <Footer />
        
        </>
    )
}
