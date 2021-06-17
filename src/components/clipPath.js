import React from "react"
import {useRef, useEffect} from "react";
import {  StaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import{gsap} from'gsap'

const ClipPath = () => {
    let ClipPathcontainerRef= useRef(null);
    let ClipPathcontainer2Ref= useRef(null);
   
    
    useEffect(() => {  

        // make sure we're in browser land for gsap plugin registration
        if (typeof window !== `undefined`) {
          // register gsap ScrollTrigger plugin
          gsap.registerPlugin(ScrollTrigger);
          gsap.core.globals('ScrollTrigger', ScrollTrigger)
          
          const tl1 = gsap.timeline();
          tl1.to(ClipPathcontainerRef.current, {ClipPath:  'polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)'})
          .to(ClipPathcontainerRef.current, {ClipPath:  'polygon(16% 0, 80% 1%, 80% 100%, 16% 100%)'})
          .to(ClipPathcontainerRef.current, {ClipPath:  'polygon(100% 0, 100% 0, 100% 100%, 0% 100%)'})
          .to(ClipPathcontainerRef.current, {ClipPath:  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
          .to(ClipPathcontainerRef.current, {ClipPath:  'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'})
       
         
          
    
         ScrollTrigger.create({
             animation:tl1,
             trigger:ClipPathcontainerRef.current,
             start:"top top",
             end:"+=1500",
             scrub:true,
             pin:true,
             anticipatePin:0
         });
         const tl2 = gsap.timeline();
         tl2.to(ClipPathcontainer2Ref.current, {ClipPath:  'polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)'})
         .to(ClipPathcontainer2Ref.current, {ClipPath:  'polygon(16% 0, 80% 1%, 80% 100%, 16% 100%)'})
         .to(ClipPathcontainer2Ref.current, {ClipPath:  'polygon(100% 0, 100% 0, 100% 100%, 0% 100%)'})
         .to(ClipPathcontainer2Ref.current, {ClipPath:  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
         .to(ClipPathcontainer2Ref.current, {ClipPath:  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
        
         
   
        ScrollTrigger.create({
            animation:tl2,
            trigger:ClipPathcontainer2Ref.current,
            start:"top top",
            end:"+=1500",
            scrub:true,
            pin:true,
            anticipatePin:0
        });
    }
    }, []);

    return (
        <div clipPath-container>
            <div className="ClipPathcontainer"ref={ el => (ClipPathcontainerRef.current = el) }>
                <div className="Clipcontent">
                <h1 className="clipText">Testing in out</h1>
                </div>
                <div className="ClipImage"></div>
            </div>
            <div className="ClipPathcontainer2"ref={ el => (ClipPathcontainer2Ref.current = el) }>
                <div className="Clipcontent">
                <h1 className="clipText">Testing in out</h1>
                </div>
                <div className="ClipImage2"></div>
            </div>
        </div>
    )

    ;
};

export default ClipPath