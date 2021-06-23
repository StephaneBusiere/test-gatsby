import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

import { scroll } from "../loco"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Scroll = callbacks => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    // locomotiveScroll.on("scroll", func => {
    //   // Update `data-direction` with scroll direction.
    //   document.documentElement.setAttribute("data-direction", func.direction)
    // })
    locomotiveScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#container", {
      scrollTop(value) {
        return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
    ScrollTrigger.refresh(); 
    
    
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll