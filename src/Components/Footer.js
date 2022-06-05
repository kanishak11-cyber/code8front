import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <>
    <div className='footer-container'>
     <section className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="images/Logo.png"></img>
            </Link>
          </div>
          <p>Compiling ideas into reality</p>
          <h2>Join for Free</h2>
     </section>
      <section className='footer-subscription'>
        <h2 className='footer-subscription-heading'>
          Newsletter
        </h2>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <br/>
            {/* <div> */}
            <Button buttonStyle='btn--sub' >Subscribe</Button>
            {/* </div> */}
          </form>
        </div>
        <section className='social-media'>
        
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>

            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>

            <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Discord'
            >
            <FaDiscord />
            </Link>

            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div> 
        </section>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Our Offerings</h2>
            <Link to='/sign-up'>Project-Based Learning</Link>
            <Link to='/'>Start-up & Incubator network</Link>
            <Link to='/'>Soft skill development</Link>
            <Link to='/'>Placement preparation</Link>
            <Link to='/'>Academic guidance</Link>
            <Link to='/'>Career mapping</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Blogs</Link>
            <Link to='/'>Resources</Link>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <p className="p-address">Flat No. 117, Block C, Sunrise Residency, 
            Rukmini enclave, Bolarum, Hyderbad.(500010)</p>
            <a href="mailto:contact.code8@gmail.com">contact.code8@gmail.com</a>
            <p>+91 8602444273</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer-container">
    </div>
    </>
  );
}

export default Footer;
