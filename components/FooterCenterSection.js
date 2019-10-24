import React from 'react';
import BlockLinksTwo from '../components/BlockLinksTwo';
import styled from 'styled-components';

function FooterCenterSection() {
  return (
    <StyleSectionCenter>
      <BlockLinksTwo />
      <p>Устанавливайте приложения</p>
      <StyleImg href='#'>
        <img src='../static/googleplay.svg' alt='google play' />
      </StyleImg>
      <StyleImg href='#'>
        <img src='../static/appstore.svg' alt='app store' />
      </StyleImg>
    </StyleSectionCenter>
  );
};

export default FooterCenterSection;

const StyleSectionCenter = styled.section`
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;

  @media (max-width: 1260px) {
    {
      width: 45%;
      margin: 0 auto 30px;
      text-align: center;
    };
  };
  
  @media (max-width: 726px) {
    {
      display: block;
      width: 100%;
      margin: 0 auto 30px;
      text-align: center;
    };
  };
`;

const StyleImg = styled.a`
  margin: 5px;
  display: inline;
`;
