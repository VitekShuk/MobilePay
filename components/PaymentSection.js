import React from 'react';
import { StyleSection } from '../components/JointStyles';
import styled from 'styled-components';
import Link from 'next/link';
import ButtonPay from '../components/ButtonPay';
import OperatorName from '../components/OperatorName';
import PaymentSystems from '../components/PaymentSystems';

class PaymentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tel: '+7(___)___-____',
      summ: '____',
      telValid: 'false',
      summValid: 'false'
    };

    this.inputMask = this.inputMask.bind(this);

  };

  inputMask(event) {
    let target = event.target;
    let newValue = event.target.value;
    let lastValue;
    let rightValue = '';
    let backRange = '';
    let startCursor;
    let insertSegment = '';
    let chooseValue;
    let symbolsOfMask = 0;
    let valueId = event.target.getAttribute('id');
    let mask = target.getAttribute('mask');
    let input = document.getElementById(valueId);
    let finishCursor = input.selectionStart;
    let changeLong = mask.length - newValue.length;
    newValue = newValue.replace(/[a-z,A-Z,а-я,А-Я,\s,~,`,!,@,#,\$,%,\^,\&,\*,\.]/g, '');

    if (valueId == 'tel') {
      lastValue = this.state.tel;
    } else if (valueId == 'summ') {
      lastValue = this.state.summ;
    };

    if (changeLong < 0) {
      changeLong = 0;
    };

    if (lastValue.length >= newValue.length) {
      chooseValue = lastValue;
    }
    else {
      chooseValue = newValue;
    };

    for (let i = 0; i < chooseValue.length; i++) {
      if (newValue[i] != lastValue[i]) {
        if (i < finishCursor) {
          startCursor = i;
        }
        else {
          startCursor = finishCursor;
        };
        break;
      };
    };

    let regexp = /[\(,\),\-]/g;

    for (let i = startCursor; i < finishCursor; i++) {
      insertSegment = insertSegment + newValue[i];
      if ( regexp.test(mask[i]) ) {
        symbolsOfMask++;
      };
    };

    insertSegment = insertSegment.replace(/[a-z,A-Z,а-я,А-Я,\s,~,`,!,@,#,\$,%,\^,\&,\*,\+\(,\),\-]/g, '');

    let j = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] == '_' ) {
        if (i < startCursor || (finishCursor + changeLong + symbolsOfMask) <= i) {
          backRange = backRange + lastValue[i];
        }
        else if ( startCursor <= i && i < (finishCursor + changeLong + symbolsOfMask) &&  insertSegment.length != 0 ) {
          backRange = backRange + (insertSegment[j] ? insertSegment[j] : mask[i]);
          j++;
        }
        else {
          backRange = backRange + mask[i];
        };
      }
      else {
        backRange = backRange + mask[i];
      };
    };

    rightValue = (valueId == 'tel') ? backRange : (backRange > 1000) ? 1000 : backRange;

    this.setState({
      [valueId] : rightValue
    });
    setTimeout( () => {
      input.focus();
      let cursor = startCursor + insertSegment.length + symbolsOfMask;
      input.setSelectionRange(cursor, cursor);
      }
    );

    let regexpTelValid = /[\_]/g;
    if (valueId == 'tel') {
      if (regexpTelValid.test(rightValue) == false) {
        this.setState({
          telValid: 'true'
        });
      }
      else {
        this.setState({
          telValid: 'false'
        });
      };
    };

    let regexpSummValid = /\d/g;
    if (valueId == 'summ') {
      if (regexpSummValid.test(rightValue) == true) {
        this.setState({
          summValid: 'true'
        });
      }
      else {
        this.setState({
          summValid: 'false'
        });
      };
    };

  };

  render() {
    return (
      <StyleSection>
        <h1>Оплата мобильной связи</h1>
        <p>У нас можно пополнить счет Мегафон, Билайн, ТЕЛЕ2, МТС, Yota и др.</p>
        <PaymentSystems />
        <StylePayment>
          <OperatorName />
          <div>
            Номер телефона
          </div>
          <StyleInput>
            <input
              color={(this.state.telValid == 'true') ? 'green' : 'red'}
              value={this.state.tel}
              onChange={this.inputMask}
              id='tel'
              mask='+7(___)___-____'
              valid={this.state.telValid}
            />
          </StyleInput>
          <div>
            Сумма оплаты
          </div>
          <StyleInput>
            <input
              color={(this.state.summValid == 'true') ? 'green' : 'red'}
              value={this.state.summ}
              onChange={this.inputMask}
              id='summ'
              mask='____'
              valid={this.state.summValid}
            />
          </StyleInput>
          <ButtonPay telValid={this.state.telValid} summValid={this.state.summValid}>
          </ButtonPay>
        </StylePayment>
      </StyleSection>
    );
  };
};

export default PaymentSection;

const StylePayment = styled.div`
  position: relative;
  height: auto;
  min-width: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
  color: rgb(67, 91, 99, 0.85);
  text-align: center;
  font-size: 18px;

  button {
    width:100px;
    height:30px;
    font-size: 15px;
  };

  button: hover {
    width:100px;
    height:30px;
    font-size: 15px;
    cursor: pointer;
  };

  @media (max-width: 445px) {
    {
      min-width: 210px;
    };
  };
`;

const StyleInput = styled.div`
  margin: 0 0 20px;

  input {
    border: none;
    border-bottom: 2px;
    text-align: center;
    font-size: 16px;
  };

  input: focus {
    border: none;
    outline: none;
    text-align: center;
    font-size: 16px;
  };
`;
