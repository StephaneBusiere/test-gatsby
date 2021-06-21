import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import parse from "html-react-parser"
import logospain from "../images/logospain.svg"
import{gsap} from'gsap'
import {useRef, useEffect} from "react";


const Header = () => {
  
  let logoRef= useRef(null);
  
  useEffect(() => {  
  
  if (typeof window !== "undefined") {
    
 
   
    const tl3 = gsap.timeline(
      { defaults: { duration: 1 }}
    );
    tl3.to(logoRef.current,{ opacity: 0, scale:0.2 })
    .to(logoRef.current,{ opacity: 1, scale:1 })

    
}


}, []);

return(
  

  <div className="home_header">
    
      <header className="global-header">
        
      <div className="header_menu">
      <div className="header_menu_left">
        <Link   className="header-link-home"to="/"
         activeClassName="active" hex="#98131E"
        >Home
       </Link>
        
        <Link className="header-link-home"  top="exit" to="/collection">Collection</Link>
        </div>
        <img ref={ el => (logoRef.current = el) }className="logo" src={logospain} alt="Logo" />
        <div className="header_menu_right">
        <Link className="header-link-home" to="/blog">Blog </Link>
        <Link className="header-link-home" to="/journal">Journal</Link>
        
        </div>
        </div>
      </header>
  </div>  
     
  
)
}
export default Header
