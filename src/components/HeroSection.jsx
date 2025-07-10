import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Rogier Vincent Ottens</h1>
      <p>Front-end Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          OVER MIJ
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;