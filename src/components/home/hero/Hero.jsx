import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO MindWell Clinic' title='Best Mental Health Provider' />
            <p>Mental health is an essential and integral part of our overall well-being, influencing how we think, feel, and navigate life's challenges.</p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
