import React from "react"
import Header from "../components/header"
import ClipPath from "../components/clipPath"
// import AnimatedCursor from "react-animated-cursor"
import {useRef, useEffect} from "react";
import {  StaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import{gsap} from'gsap'
import loadable from '@loadable/component'

const AnimatedCursor = loadable(() => import('react-animated-cursor'))

const Collection = ({ data, location }) => {
   
    return (
        <div className="content-container">
        <AnimatedCursor />
      <div className="top-content">
          
      
          <Header/>
      </div>
      <ClipPath/>
      </div>
)
}

export default Collection