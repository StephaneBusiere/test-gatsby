import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
// import AnimatedCursor from "react-animated-cursor"

const Home = ({ data, location }) => {
   
    return (
     
     <div className="content-container">
          {/* <AnimatedCursor /> */}
        <div className="top-content">
            
        
            <Header/>
        </div>

        <div className="hero-content">
        <Hero/>
        </div>
        <div className="third-section">
            <p className="about-us-text">About us</p>
            <div className="about-us-section"></div>
            <div className="about-us-text">Abene Mendizabal</div>
            <div className="about-us-text">Founder et CEO Spain Collection</div>
        </div>
    </div>
    )
  }
  
  export default Home
  