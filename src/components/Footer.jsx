import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background: #62D8AF;
  color:white;
  text-align:center;
  width:100%;
  padding: 25px 0;
  margin-top:50px;
  bottom: 0;
  position: fixed;
  & a {
    text-decoration:none;
    font-weight:bold;
    color:white;
  }
  & a:hover {
    color:#0e4e38;
  }
  @media screen and (max-width:800px) {
    padding: 10px 0;
  }
`;
const Footer = () => {
  return (
    <Container>
      <p>
        Hecho con
        {' '}
        <span role="img">❤️</span>
        {' '}
        por
        {' '}
        <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">David Behar</a>
      </p>
    </Container>
  );
};

export default Footer;
