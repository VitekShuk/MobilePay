import React from 'react';
import styled from 'styled-components';

function InfoAbout() {
  return (
    <>
      <StyleLogoFooter>
        <img src='../static/logo-footer.svg' alt='MobilePay logo-footer' />
      </StyleLogoFooter>
      <StyleTextAbout>
        MobilePay — это сервис оплаты мобильной связи любой банковской картой.
        Здесь можно пополнить счет следующих мобильных операторов: Мегафон, Билайн, ТЕЛЕ2, МТС, Yota, DANYCOM, МОТИВ, Вайнахтелеком и Летай.
        Все платежи защищены по стандарту PCI DSS.
      </StyleTextAbout>
      <StyleTextAbout>
        Моментально пополнить счет не составит труда.
        Благодаря возможности онлайн оплаты услуг мобильной связи, можно забыть о нулевом балансе телефона.
      </StyleTextAbout>
    </>
  );
};

export default InfoAbout;

const StyleTextAbout = styled.p`
  margin: 15px;
  text-align: justify;
  color: rgb(255, 255, 255, 0.9);
`;

const StyleLogoFooter = styled.div`
  display: inline;
  margin: 15px;
`;
