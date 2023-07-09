import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-icons'>
        <br />
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </div>
      <br />
      <form action="http://172.16.30.30:5555/ex/subscribe" className='footer-form' method='post'>
        <input style={{width:"25vw"}} type="email" name='subscribe' placeholder='Email Address'required/>
        <button type='submit' className='footer-form-button'>Subscribe</button>
      </form>
      <br />
      <p className='footer-copyright'>&copy; {new Date().getFullYear()} devWeb. All rights reserved.</p>
    </div>
  );
};

export default Footer;
