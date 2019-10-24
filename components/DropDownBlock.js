import React from 'react';
import { StyleOperator, StyleImg } from '../components/JointStyles';
import styled from 'styled-components';

function DropDownBlock() {
  return (
    <StyleOperator href='#' className='operator'>
      <div key='allList'>
        <StyleImg>
          <img src='../static/list.svg' alt='весь список операторов' />
        </StyleImg>
        <StyleDropDown>
          Все операторы
        </StyleDropDown>
      </div>
    </StyleOperator>
  );
};

export default DropDownBlock;

const StyleDropDown = styled.div`
  position: absolute;
  display: inline-block;
  top: 50%;
  margin-top: -0.625em;
  font-size: 18px;
  text-decoration: underline;
`;
