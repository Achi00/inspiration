import React from 'react'
import Background from './animated_Bg/Background'

const Header = () => {
  return (
    <div className='hero-banner-container'>
      <Background />
      <div>
        <p className='header-text'>Daily design inspiration for creatives.</p>
        <h3></h3>
      </div>
    </div>
  )
}

export default Header