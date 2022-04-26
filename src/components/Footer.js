import React from 'react'
import styled from 'styled-components';

const FooterStyled = styled.footer`
  text-align: center;
  padding-bottom: 40px;
  color: #9E9E9E;

  a{
    color: #5a5a5a;
    font-weight: bold;
    text-decoration: none;
  }

`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>Created by <a href="https://github.com/GABjTDev" target='_blank' rel="noreferrer">Gabriel Rea</a> - <a href="https://devchallenges.io/" target='_blank' rel="noreferrer">devChallenges.io</a></p>
    </FooterStyled>
  )
}

export default Footer