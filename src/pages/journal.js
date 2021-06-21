import React from "react"
import Header from "../components/header"
import ClipPath from "../components/clipPath"
// import AnimatedCursor from "react-animated-cursor"
import {useRef, useEffect} from "react";
import {  StaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import{gsap} from'gsap'

import LogoPapillon  from "/content/assets/papillon.svg"
import loadable from '@loadable/component'

const AnimatedCursor = loadable(() => import('react-animated-cursor'))

const Journal = ({ data, location }) => {
   let papillonContentRef=useRef(null);
   let papillonImage1Ref=useRef(null);
   let papillonImage2Ref=useRef(null);
   let papillonImage3Ref=useRef(null);
   let papillonImage4Ref=useRef(null);
   let papillonImage5Ref=useRef(null);
   let papillonImage6Ref=useRef(null);
   let papillonImage7Ref=useRef(null);
   let papillonImage8Ref=useRef(null);
   let papillonImage9Ref=useRef(null);
   let papillonImage10Ref=useRef(null);
   let papillonImage11Ref=useRef(null);
   let papillonImage12Ref=useRef(null);
   let HLetter1Ref=useRef(null);
   let OLetter1Ref=useRef(null);
   let MLetter1Ref=useRef(null);
   let ELetter1Ref=useRef(null);

   useEffect(() => {  

    // make sure we're in browser land for gsap plugin registration
    if (typeof window !== `undefined`) {
      // register gsap ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
  
      const tl1 = gsap.timeline();
        tl1//.from(papillonContentRef.current, {transform: 'translateY(-800px)', duration: 2})
      
      .to(papillonImage4Ref.current,{opacity:1, duration:0.2})
      .to(papillonImage7Ref.current,{opacity:1, duration:0.2})
      .to(papillonImage8Ref.current,{opacity:1, duration:0.2})
      .to(papillonContentRef.current, {transform: 'translateY(0px)'});
      
      
      const tl2 = gsap.timeline();
      tl2//.from(papillonContentRef.current, {transform: 'translateY(-2500px)', duration: 1})
      .to(papillonImage9Ref.current,{opacity:1, duration:0.2})
      .to(papillonImage5Ref.current,{opacity:1, duration:0.2})
      .to(papillonImage6Ref.current,{opacity:1, duration:0.2})
      .to(papillonContentRef.current, {transform: 'translateY(0px)'})
      .to (HLetter1Ref.current,{opacity:1, color:"black", duration:0.2,
       
        fontSize: "70px"})
    .to (OLetter1Ref.current,{opacity:1, color:"black", duration:0.2,
        
        fontSize: "70px"})
    .to (MLetter1Ref.current,{opacity:1, color:"black", duration:0.3,
        textShadow: "0 0 0px rgba(0,0,0,0)",
        fontSize: "70px"})
    .to (ELetter1Ref.current,{opacity:1, color:"black", duration:0.3,
        textShadow: "0 0 0px rgba(0,0,0,0)",
        fontSize: "70px"})

     
    }
}, []);
    return (
        <div className="contentPapillon-container">
            <AnimatedCursor />
            <div className="papillon-logo-container">
                
                <LogoPapillon className="logoPapillon" fill="red"/>
         
                <div className="papillonTitle"><p>PAPILLONS</p></div>
                <div className="papillon-small-Title"><p>BY AIRELLES</p></div>
            </div>
            <div ref={ el => (papillonContentRef.current = el) } className="top-papillon-content">
               <div className="papillon-title-container">
                   <span ref={ el => (HLetter1Ref.current = el) } className="HLetter">H</span>
                   <span ref={ el => (OLetter1Ref.current = el) } className="OLetter">0</span>
                   <span ref={ el => (MLetter1Ref.current = el) } className="MLetter">M</span>
                   <span ref={ el => (ELetter1Ref.current = el) } className="ELetter">E</span>
                  
               </div>
                <div  ref={ el => (papillonImage1Ref.current = el) } className="Papillon-image un"></div>
                <div  ref={ el => (papillonImage2Ref.current = el) } className="Papillon-image deux"></div>
                <div  ref={ el => (papillonImage3Ref.current = el) } className="Papillon-image trois"></div>
                <div  ref={ el => (papillonImage4Ref.current = el) } className="Papillon-image quatre"></div>
                <div  ref={ el => (papillonImage5Ref.current = el) } className="Papillon-image cinq"></div>
                <div  ref={ el => (papillonImage6Ref.current = el) } className="Papillon-image six"></div>
                <div  ref={ el => (papillonImage7Ref.current = el) } className="Papillon-image sept"></div>
                <div  ref={ el => (papillonImage8Ref.current = el) } className="Papillon-image huit"></div>
                <div  ref={ el => (papillonImage9Ref.current = el) } className="Papillon-image neuf"></div>
                <div  ref={ el => (papillonImage10Ref.current = el) } className="Papillon-image dix"></div>
                <div  ref={ el => (papillonImage11Ref.current = el) } className="Papillon-image onze"></div>
                <div  ref={ el => (papillonImage12Ref.current = el) } className="Papillon-image douze"></div>
            </div>
 
        </div>
)
}

export default Journal