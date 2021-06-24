import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.scss";

export default function Header2() {
  
  let titleRef = useRef(null);
  
  useEffect(() => {

    setTimeout(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
      scrollTrigger: {
        start: "top top",
        trigger: titleRef.current,
        scroller: "#container",
        end: () => `+=${titleRef.current.offsetWidth}`,
      },
    });
    ScrollTrigger.refresh();
  });
  }, []);

  return (
    <section  ref={ el => (titleRef.current = el)}  className="header-container" data-scroll-section>
      <h1 id="header-text">YOUR HOME</h1>
     
    </section>
    
  );
}