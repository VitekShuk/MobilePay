import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

function Header() {
  return (
    <StyleHeader>
      <StyleSectionLeft>
        <img src='../static/logo.svg' alt='MobilePay logo' />
      </StyleSectionLeft>
      <StyleSectionRight>
        <Nav />
      </StyleSectionRight>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header`
  position: relative;
  margin: 0 auto;
  badding: 0;
  background: rgb(255, 255, 255);;
  text-align: center;
`;

const StyleSectionLeft = styled.div`
  display: inline-block;
  width: 20%;
  margin: 0 10px;
  vertical-align: middle;
  text-align: left;

  @media (min-width: 695px) and (max-width: 1025px) {
    {
      width: 100%;
      text-align: center;
    };
  };
  @media (max-width: 695px) {
    {
      display: block;
      width: 100%;
      text-align: center;
    };
  };
`;

const StyleSectionRight = styled.div`
  display: inline-block;
  width: 70%;
  margin: 0 10px;
  vertical-align: middle;
  text-align: right;

  @media (min-width: 695px) and (max-width: 1025px) {
    {
      width: 100%;
      margin: 10px 0 0;
      text-align: center;
    };
  };
`;
