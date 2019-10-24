import React from 'react';
import { StyleOperator, StyleImg } from '../components/JointStyles';
import Link from 'next/link';
import styled from 'styled-components';

function TemplateOfList(props, {query} ) {
  let operName = props.item[0];
  let imgLink = props.item[1];
  let legalName = props.item[2];
  return(
    <Link prefetch href={{pathname: '/payment', query: {operator: `${operName}`}}}>
      <StyleOperator className='operator'>
        <div key={operName}>
          <StyleImg>
            <img src={imgLink} alt={operName} />
          </StyleImg>
          <StyleAboutOperator>
            {operName}
            <StyleTextCompany>
              {legalName}
            </StyleTextCompany>
          </StyleAboutOperator>
        </div>
      </StyleOperator>
    </Link>
  );
};

export default TemplateOfList;

const StyleAboutOperator = styled.div`
  display: inline-block;
  position: absolute;
  margin: 5px;
  top: 50%;
  margin-top: -0.625em;
  font-size: 18px;
`;

const StyleTextCompany = styled.div`
  margin: 4px 0 0;
  font-size: 0.8em;
  color: rgb(0, 0, 0, 0.5);

  @media (max-width: 445px) {
    {
      display: none;
    };
  };
`;
