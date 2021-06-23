import React , { useState } from "react"
import { Link } from "gatsby"
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

import Scroll from "../components/locomotiveScroll"
import "../components/locomotive-scroll.css"
import useLocoScroll from "../hooks/useLocoScroll";
import videoImage from "../images/hotel.jpg"
import Gallery from "../components/Gallery";



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
   let papillonImageVideoRef=useRef(null);
   let papillonImageVideoContainerRef=useRef(null);
   let dataScrollContainerRef=useRef(null);
   let papillonClipPathontainerRef=useRef(null);
   let maskLeftRef=useRef(null);
   let maskRightRef=useRef(null);
   let afterVideoRef=useRef(null);
   
   const [preloader, setPreload] = useState(true);
   
   useLocoScroll(!preloader);

    useEffect(() => {
    if (!preloader && dataScrollContainerRef.current) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
  
      const tl1 = gsap.timeline();
        tl1//.from(papillonContentRef.current, {transform: 'translateY(-800px)', duration: 2})
      
      .to(papillonImage4Ref.current,{opacity:1, duration:0.2})
      .to(papillonImage7Ref.current,{opacity:1, duration:0.2})
      .to(papillonImage8Ref.current,{opacity:1, duration:0.2})
      .to(papillonImageVideoContainerRef.current,{opacity:1, duration:0.2})
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
        fontSize: "70px"});
        
        // const tl5 = gsap.timeline();
        // tl5.to(papillonImage11Ref.current , {width:'20%',duration:2})
        // // .to(maskRightRef.current, {width:'0%'})
      
        
        // ScrollTrigger.create({
        //     animation:tl5,
        //     trigger:papillonImageVideoContainerRef.current,
        //     start:"50% 50% ",
        //     end:'+=1800',
        //     scrub:true,
        //     pin:true,
        //     anticipatePin:0,
        //     scroller: dataScrollContainerRef.current
        // });
     
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
   
   

    return (
    <div>
        {preloader ? (
        <div className="loader-wrapper absolute">
          <h1 className="first-text-loader">PAPILLON</h1>
          <LogoPapillon className="logoPapillonLoader"/>
          <h2 className="second-text-loader">BY AIRELLES</h2>
          <div className="transition-color"></div>
        </div>
      ) : (
        <div  ref={ el => (dataScrollContainerRef.current = el) } className="contentPapillon-container" data-scroll-container id="container">
            {/* <Scroll callbacks={location} /> */}
            <AnimatedCursor />
            <div className="papillon-logo-container" >
                <Link  top="exit" to="/collection"> <LogoPapillon className="logoPapillon" /></Link>
               
         
                <div className="papillonTitle" ><p>PAPILLONS</p></div>
                <div className="papillon-small-Title" ><p>BY AIRELLES</p></div>
            </div>
            <div className="scroll-section" data-scroll-section> 
                <div ref={ el => (papillonContentRef.current = el) } className="top-papillon-content" >
                    <div className="papillon-title-container">
                        <span ref={ el => (HLetter1Ref.current = el) } className="HLetter">H</span>
                        <span ref={ el => (OLetter1Ref.current = el) } className="OLetter">0</span>
                        <span ref={ el => (MLetter1Ref.current = el) } className="MLetter">M</span>
                        <span ref={ el => (ELetter1Ref.current = el) } className="ELetter">E</span>
                  
                    </div>
                    <div className="colum1" data-scroll data-scroll-speed="10">
                        <div  ref={ el => (papillonImage1Ref.current = el) } className="Papillon-image un" ></div>
                        <div  ref={ el => (papillonImage4Ref.current = el) } className="Papillon-image quatre"  ></div>
                        <div  ref={ el => (papillonImage7Ref.current = el) } className="Papillon-image sept" ></div>
                        <div  ref={ el => (papillonImage10Ref.current = el) } className="Papillon-image dix" ></div>
                    </div>
                    <div className="colum2"  data-scroll data-scroll-speed="1">
                        <div  ref={ el => (papillonImage2Ref.current = el) } className="Papillon-image deux" ></div>
                        <div  ref={ el => (papillonImage5Ref.current = el) } className="Papillon-image cinq"></div>
                        <div  ref={ el => (papillonImage8Ref.current = el) } className="Papillon-image huit" ></div>
                       
                    </div>
                    <div className="colum3" data-scroll data-scroll-speed="10">
                        <div  ref={ el => (papillonImage3Ref.current = el) } className="Papillon-image trois"></div>
                        <div  ref={ el => (papillonImage6Ref.current = el) } className="Papillon-image six"></div>
                        <div  ref={ el => (papillonImage9Ref.current = el) } className="Papillon-image neuf" ></div>
                        <div  ref={ el => (papillonImage12Ref.current = el) } className="Papillon-image douze" ></div>
                     </div>
                     
                     {/* <div  ref={ el => (papillonImageVideoContainerRef.current = el) }  className="video-section"> */}
                       
                        <img ref={ el => (papillonImageVideoContainerRef.current = el) } src={videoImage} className="Video-image" data-scroll  data-scroll-offset="1400px,-100%" data-scroll-repeat="true" data-scroll-speed="1"/>
                    {/* </div>      */}
                   
                </div>
                <div ref={ el => (afterVideoRef.current = el) } className="after-video"></div>
            </div>
            <Gallery />
                
        </div>
        
             
        )}     
            
    </div>
)
}

export default Journal