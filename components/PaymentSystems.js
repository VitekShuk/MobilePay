import React from 'react';
import styled from 'styled-components';

function PaymentSystems() {
  return (
    <StyleImg>
      <img src='../static/payments/cirrus.png' alt='cirrus платежная система' />
      <img src='../static/payments/maestro.png' alt='maestro платежная система' />
      <img src='../static/payments/mastercard.png' alt='mastercard платежная система' />
      <img src='../static/payments/paypal.png' alt='paypal платежная система' />
      <img src='../static/payments/visa.png' alt='visa платежная система' />
      <img src='../static/payments/visaelectron.png' alt='visaelectron платежная система' />
      <img src='../static/payments/westernunion.png' alt='westernunion платежная система' />
      <img src='../static/payments/visa02.png' alt='visa02 платежная система' />
      <img src='../static/payments/worldpay.png' alt='worldpay платежная система' />
      <img src='../static/payments/americanexpress.png' alt='americanexpress платежная система' />
    </StyleImg>
  );
};

export default PaymentSystems;

const StyleImg = styled.div`
  text-align: center;

  img {
    margin: 0 5px;
    opacity: 0.25;
    display: inline-block;
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: linear;
  };

  img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  };
`;
