import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
// import AnimatedCursor from "react-animated-cursor"
import Example from  "../components/marquee"
import Example2 from  "../components/marquee2"
import loadable from '@loadable/component'

const AnimatedCursor = loadable(() => import('react-animated-cursor'))

const Layout2= ({ data, location }) => {
   
    return (
     
     <div className="content-container">
          <AnimatedCursor />
        <div className="top-content">
            
        
            <Header/>
        </div>

        <div className="hero-content">
        <Hero/>
        </div>
        <div className="third-section">
          <p className="about-us-text">About us</p>
          <div className="about-us-section"></div>
          <p className="about-us-text-user">Abene Mendizabal</p>
          <p className="about-us-text-user">Founder et CEO Spain Collection</p>
          <Example/>
          <Example2/>
        </div>

    </div>
    )
  }
  
  export default Layout2