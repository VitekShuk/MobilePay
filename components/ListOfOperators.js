import React, { useState } from 'react';
import FewOfOperators from '../components/FewOfOperators';
import MostOfOperators from '../components/MostOfOperators';
import DropDownBlock from '../components/DropDownBlock';
import { listObj } from '../components/listObj';
import styled from 'styled-components';

function ListOfOperators() {

  const [showFlag, setShowFlag] = useState(false);

  return (
    <StyleSection>
      {listObj.map((item, index) => <FewOfOperators item={item} index={index} />)}
      {
        (showFlag == false)
        ?
          <a onClick={() => setShowFlag( true )} >
            <DropDownBlock />
          </a>
        :
        listObj.map((item, index) => <MostOfOperators item={item} index={index} />)
      }
    </StyleSection>
  );
};

export default ListOfOperators;

const StyleSection = styled.div`
  badding: 15px;
  margin: 1% auto;

  .operator {
    transition-property: box-shadow;
    transition-duration: 400ms;
    transition-timing-function: linear;
  };

  .operator:hover {
    box-shadow: 0 0 30px 0 rgb(100,124,138,0.5);
    color: rgb(0, 0, 0);
  };
`;
