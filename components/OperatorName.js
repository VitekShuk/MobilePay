import React from 'react';
import styled from 'styled-components';

function OperatorName() {
  let url = window ? window.location.href : '';
  let operName = url.replace(/.*operator=/,``);
  operName = decodeURI(operName);
  return (
    <StyleOperName>
      «{operName}»
    </StyleOperName>
  );
};

export default OperatorName;

const StyleOperName = styled.h3`
  color: rgb( 0, 0, 0 ,0.75);
`;
