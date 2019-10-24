import React from 'react';
import SocialIcons from '../components/SocialIcons';
import BlockLinksOne from '../components/BlockLinksOne';
import styled from 'styled-components';

function FooterLeftSection() {
  return (
    <StyleSectionLeft>
      <BlockLinksOne />
      <p>Мы в социальных сетях</p>
      <SocialIcons />
    </StyleSectionLeft>
  );
};

export default FooterLeftSection;

const StyleSectionLeft = styled.section`
  display: inline-block;
  vertical-align: middle;
  width: 18%;
  margin: 0 10px;
  text-align: center;

  p {
    text-align: center;
  };

  @media (max-width: 1260px) {
    {
      width: 35%;
      margin: 0 auto 30px;
      text-align: center;
    };
  };

  @media (max-width: 726px) {
    {
      width: 100%;
      margin: 0 auto 30px;
      text-align: center;
    };
  };
`;
