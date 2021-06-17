import React, { Component } from 'react'

// import Marquee from '@seberm/react-marquee'
import loadable from '@loadable/component'
const Marquee = loadable(() => import('@seberm/react-marquee'))
const Example = () => {
  return (

    <div className="marquee-container">
    <Marquee spacing="0" reverse="true" speed="10">
      <h2 className="marquee-text">LISBON-</h2>
      <h2 className="marquee-text">PORTO-</h2>
      <h2 className="marquee-text">BARCELONE-</h2>
      <h2 className="marquee-text">VALENCIA-</h2>
      <h2 className="marquee-text">BILBAO-</h2>
    </Marquee>
    </div>
  )
}

export default Example