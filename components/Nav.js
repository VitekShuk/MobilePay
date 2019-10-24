import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <StyleNav>
      <a href='#'>Главная</a>
      <a href='#'>Блог</a>
      <a href='#'>Поддержка</a>
      <a href='#'>Проекты</a>
      <a href='#'>Реквизиты</a>
      <a href='#'>О нас</a>
    </StyleNav>
  );
};

export default Nav;

const StyleNav = styled.nav`
  margin: 5px;
  font-size: 18px;
  font-weight: 550;

  a {
    margin: 15px;
    text-decoration: none;
    transition-property: color;
    transition-duration: 400ms;
    transition-timing-function: linear;
    color: rgb(67, 91, 99, 1);;
  };

  a:hover {
    margin: 15px;
    text-decoration: none;
    color: rgb(66, 92, 74, 0.5);
  };

  @media (max-width: 695px) {
    a {
      display: block;
      text-align: center;
    }
  };
`;
