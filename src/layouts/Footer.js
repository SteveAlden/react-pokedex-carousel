import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      className='footer'
      style={{
        marginTop: '30px'
      }}
    >
      <Container fluid>
        <span>
          <p className='copyright' align='center' style={{ color: 'white' }}>
            &copy; {new Date().getFullYear()} S Steve Alden, all rights
            reserved. Made with{' '}
            <img
              height='18px'
              alt='LOVE'
              src='https://res.cloudinary.com/aldencloud/image/upload/v1585305047/Heart/red-heart.png'
            />
          </p>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
