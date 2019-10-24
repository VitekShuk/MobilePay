import React from 'react';
import ListOfOperators from '../components/ListOfOperators';
import PaymentSystems from '../components/PaymentSystems';
import { StyleSection } from '../components/JointStyles';

function ContentSection() {
  return (
    <StyleSection>
      <h1>Оплата мобильной связи</h1>
      <p>У нас можно пополнить счет Мегафон, Билайн, ТЕЛЕ2, МТС, Yota и др.</p>
      <PaymentSystems />
      <ListOfOperators />
    </StyleSection>
  );
};

export default ContentSection;
