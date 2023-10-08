import React from 'react'
import './Footer.css'
import tokenjet from '../../Images/Logo/tokenjet.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-div'>
      <div className='footer-desc justify-content-between py-3'>
        <div className='logo-div'>
          <img src={tokenjet} alt='tokenjet'/>
        </div>

        <div className='about-div'>
          <h5>ABOUT</h5>
          <p className='text-wrap' style={{width: '12rem'}} >TokenJet is the largest, leading online crytocurrency trading marketplace.</p>
        </div>

        <div className='support-div'>
        <h5>SUPPORT</h5>
          <a href='mailto:tokenjet@support.com'> tokenjet@support.com</a>
          <p> +63 901 2345 678</p>
        </div>

        <div className='socials-div'>
          <h5>SOCIALS</h5>
            <div className='text-center'>
              <a href='https://twitter.com/' target='_blank' rel='noreferrer'><i class="bi bi-twitter-x me-3 fs-4"></i></a>
              <a href='https://www.facebook.com/'  target='_blank' rel='noreferrer'><i class="bi bi-facebook me-3 fs-4" ></i></a>
              <a href='https://discord.com/'  target='_blank' rel='noreferrer'><i class="bi bi-discord fs-4"></i></a>
            </div>
        </div>
      </div>

      <div className='footer-terms justify-content-between'>
        <div className='copyright-div'>
          <p><span>TokenJet</span> © David Mendoza, 2023</p>
        </div>

        <div className='privacy-terms-div'>
          <a href='#' className='me-4'>Privacy Policy</a>
          <a href='#'>Terms and Conditions</a>
        </div>
        
      </div>
      </div>
    </footer>
  )
}

export default Footer