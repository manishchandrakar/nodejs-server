// react-client/src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>
        Design and developed by Manish Chandrakar{' '}
        <a
          href="https://www.linkedin.com/in/manish-chandrakar-23392b183/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/manishchandrakar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
