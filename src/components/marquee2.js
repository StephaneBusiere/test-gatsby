import React, { Component } from 'react'

// import Marquee from '@seberm/react-marquee'
import loadable from '@loadable/component'

const Marquee = loadable(() => import('@seberm/react-marquee'))

const Example2 = () => {
  return (

    <div className="marquee-container">
    <Marquee spacing="0" >
      <h2 className="marquee-text">SHOPPING-</h2>
      <h2 className="marquee-text">SPORT-</h2>
      <h2 className="marquee-text">CULTURE-</h2>
      <h2 className="marquee-text">FOOD-</h2>
      <h2 className="marquee-text">FASHION-</h2>
    </Marquee>
    </div>
  )
}

export default Example2