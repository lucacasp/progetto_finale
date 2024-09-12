import React from 'react'
import './Hero.css'
import glassify_definitivo from '../Assets/glassify_definitivo.mp4'
import glassify from '../Assets/glassify.mp4'
const Hero = () => {
  return (
    <div className='hero'>
        
        
        <video 
          src={glassify_definitivo} 
          autoPlay
          muted  // Disattiva l'audio per default
          playsInline
          className="hero-video" // Classe CSS per stilizzare il video
        />

        {/* Video per mobile */}
      <video 
        src={glassify}
        autoPlay
        muted
        playsInline
        className="hero-video mobile-video"
      />
      
    </div>
  )
}

export default Hero
