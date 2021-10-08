import React from 'react'
import Explore from "../components/sections/Explore"
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

export default function Landing() {
    return (
        <>
        <Hero />
        {/* <Explore /> */}
        <WhyWeAre />
        <Services />
        <Gallery /> 
        {/* <Testimonial/> */}
        <About />
        {/* <Team /> */}
        {/* <Community /> */}
        <Contact />
        {/* <Footer /> */}
        
        </>
    )
}
