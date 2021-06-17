import React from "react"
import {useRef, useEffect} from "react";
import {  StaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import{gsap} from'gsap'


   
const Hero = () => {
    const ref = useRef(null);
    let container1Ref = useRef(null);
    let container2Ref = useRef(null);
    let container3Ref = useRef(null);
    let container4Ref = useRef(null);
    let triggerPointRef = useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {  

        // make sure we're in browser land for gsap plugin registration
        if (typeof window !== "undefined") {
    
          // register gsap ScrollTrigger plugin
          gsap.registerPlugin(ScrollTrigger);
          gsap.defaults({ease:"none",duration:2});
          const tl2 = gsap.timeline();
          tl2.from(triggerPointRef.current,{yPercent:-100})
          .from(container3Ref.current,{yPercent:100})
          // Set up timeline
          const tl = gsap.timeline();
          tl.from(container2Ref.current,{xPercent:-100})
          .from(container3Ref.current,{xPercent:100})
         
          
    
         ScrollTrigger.create({
             animation:tl,
             trigger:triggerPointRef.current,
             start:"top top",
             end:"+=3000",
             scrub:true,
             pin:true,
             anticipatePin:1
         });

        }
      }, [triggerPointRef]);
  

return (
    <StaticQuery
    query={graphql`
    query MyQuery {
        wpPage(databaseId: {in: 2658}) {
          id
          homePageTitle {
            titreSecondaire
            couleurTitreSecondaire
          }
          title
        }
      }
      
      
  `}
 
  render=
  
  {data => (
  

<div className="hero-section-container">
    <section className="hero-top-title"><p>{data.wpPage.title}</p></section>
    <div ref={ el => (triggerPointRef.current = el)} className="hero-section">
      
        <section ref={ el => (container1Ref.current = el) } className="heroContainer1"></section>
        <section  ref={ el => (container2Ref.current = el) } className="heroContainer2"></section>
        <section ref={ el => (container3Ref.current = el) } className="heroContainer3"></section>
    
    </div>
    <div className="hero-tex-container" ><p className="hero-title" style={{ color:(data.wpPage.homePageTitle.couleurTitreSecondaire
    )}}>{data.wpPage.homePageTitle.titreSecondaire}</p></div>
</div>
 )}
 />
);
};

export default Hero