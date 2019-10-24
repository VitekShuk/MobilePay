import React from 'react';
import FooterLeftSection from '../components/FooterLeftSection';
import FooterRightSection from '../components/FooterRightSection';
import FooterCenterSection from '../components/FooterCenterSection';
import styled from 'styled-components';

function Footer() {
  return (
    <StyleFooter>
      <FooterLeftSection />
      <FooterCenterSection />
      <FooterRightSection />
      <hr align="center" width="90%" />
      <StyleCopyright>
        &copy; 2019 ООО"MobilePay". Все права защищены.
      </StyleCopyright>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.footer`
  padding: 5px;
  background: rgb(67, 91, 99);
  text-align: center;
  color: rgb(255, 255, 255);
`;

const StyleCopyright = styled.div`
  margin: 5px;
`;
