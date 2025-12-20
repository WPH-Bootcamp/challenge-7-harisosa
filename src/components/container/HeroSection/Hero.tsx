import React from 'react';
import Button from '../../ui/Button';
import './Hero.css';
import { useTheme } from '../../../shared/hooks';

const Hero: React.FC = () => {

  const { mode } = useTheme();
  return <section
      id='hero'
      className='hero'
    >
      <div className='hero-container'>
        <h1 className='hero-title'>
          Your Tech Partner for{' '}
          <span className='highlight'>Smarter Growth</span>
        </h1>

        <p className='hero-description'>
          We deliver tailored IT solutions to help you scale with speed and confidence.
        </p>

        <Button className='cta'
          onClick={()=>{}}
         ariaLabel='lets-talk'>
          Let’s Talk
        </Button>
      </div>

      <div className='hero-img'>
        <img src={mode === 'dark' ? 'assets/images/banner.svg' : 'assets/images/light-banner.svg'} alt='Hero' className='w-full h-auto object-contain' />
      </div>
    </section>
};

export default Hero;
