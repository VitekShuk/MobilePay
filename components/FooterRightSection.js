import React from 'react';
import InfoAbout from '../components/InfoAbout';
import styled from 'styled-components';

function FooterRightSection() {
  return (
    <StyleSectionRight>
      <InfoAbout />
    </StyleSectionRight>
  );
};

export default FooterRightSection;

const StyleSectionRight = styled.section`
  display: inline-block;
  width: 45%;
  margin: 0 10px;
  vertical-align: middle;
  text-align: center;

  @media (max-width: 1260px) {
    {
      width: 70%;
      margin: 30px auto;
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
