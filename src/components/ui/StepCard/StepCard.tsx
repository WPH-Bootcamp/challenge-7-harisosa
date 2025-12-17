import React from 'react';
import './StepCard.css';
import type { Process } from '../../../types';
import ArrowIcon from '../Icon/ArrowIcon';

interface StepCardProps {
    process: Process;
    index:number;
    total: number;
}


const StepCard : React.FC<StepCardProps> = (props) =>{
    const { process, index, total } = props;

  const isOdd = (index + 1) % 2 === 1;
  const position = index === 0 ? 'start' : index === total - 1 ? 'end' : 'middle';
  const number = process.step ?? index + 1;

  return (
    <div className={['step-row', isOdd ? 'step-row--odd' : 'step-row--even'].join(' ')}>
      {/* MOBILE indicator */}
      <div className='only-mobile'>
        <StepIndicator step={number} variant='mobile' position={position} />
      </div>

      {/* Zig-zag placement on lg */}
      {isOdd ? (
        <>
          <div className='step-card'>
            <div className='step-card-text'>
              <h3 className='step-card-title'>{process.title}</h3>
              <p className='step-card-description'>{process.description}</p>
            </div>
            <ArrowIcon className='step-icon' />
          </div>

          <div className='only-lg'>
            <StepIndicator step={number} variant='lg' position={position} />
          </div>
        </>
      ) : (
        <>
          <div className='lg-indicator-left only-lg'>
            <StepIndicator step={number} variant='lg' position={position} />
          </div>

          <div className='step-card'>
            <div className='step-card-text'>
              <h3 className='step-card-title'>{process.title}</h3>
              <p className='step-card-description'>{process.description}</p>
            </div>
            <ArrowIcon className='step-icon' />
          </div>
        </>
      )}
    </div>
  );
}


const StepIndicator = ({ step = 0, variant = 'mobile', position = 'middle' }) => {
  // position: 'start' | 'middle' | 'end'
  return (
    <div className={`step-indicator step-indicator--${variant}`}>
      <div
        className={`step-line step-line--top ${position === 'start' ? 'step-line--hidden' : ''}`
        }
      />
      <div className='step-bubble'>{step}</div>
      <div
        className={`step-line step-line--bottom ${position === 'end' ? 'step-line--hidden' : ''}`
        }
      />
    </div>
  );
}


export default StepCard;