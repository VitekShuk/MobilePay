import React from 'react';
import styled from 'styled-components';

function Spinner() {
  return(
    <StyleSpinner>
      <div className='circle' />
    </StyleSpinner>
  );
};

export default Spinner;

const StyleSpinner = styled.div`
display: inline-block;
  .circle {
  width:10px;
  height:10px;
  border:3px solid rgb(67, 91, 99);
  border-top:3px solid rgb(255, 255, 255);
  border-radius:50%;
  animation: rotate 1.5s infinite ease-in-out;
  }
  @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    }
  }
`;
