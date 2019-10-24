import React, { Component } from 'react';
import styled from 'styled-components';

function Main(props) {
  return (
    <StyleMain>
      {props.children}
    </StyleMain>
  );
};

export default Main;

const StyleMain = styled.main`
  padding: 20px;
  background: rgb(105, 186, 105, 0.4);

  @media (max-width: 445px) {
    {
      padding: 5px;
    }
  };
`;
