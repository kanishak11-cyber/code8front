import React from 'react';
import './HeroSection.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

function HeroSection({
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className='home__hero-section'
      >
        {/* <div style={{height: '50vh'}}>


        <iframe
  src='https://my.spline.design/calculatorcopy-760e7456d58f24a49646759e2b5d4c33/'
  frameborder='0'
  width='100%'
  height='100%'
></iframe>
        </div> */}

        <div className='container'>
          <div
            className='row home__hero-row'
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className='heading'>
                  {headline}
                </h1>
                <p
                  className='home__hero-subtitle'
                >
                  {description}
                </p>
                <Link to='/community'>
                  <Button buttonSize='btn--large' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper '>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
