import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <a target="_blank" href="https://github.com/nwilliams770">
          <i className="footer-btn fa fa-github-square fa-3x" aria-hidden="true"></i>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
          <i className="footer-btn fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
        </a>

        <a target="_blank" href="https://www.facebook.com/nwilliams770">
          <i className="footer-btn fa fa-facebook-square fa-3x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;