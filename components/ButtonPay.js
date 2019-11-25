import React, { useState } from 'react';
import ModalWindow from '../components/ModalWindow';
import Spinner from '../components/Spinner';

function ButtonPay(props) {
  
  const [pay, setPay] = useState(null);
  const [request, setRequest] = useState('false');

  function toPay() {
    setRequest('true' );
    if (Math.random() > 0.5) {
      setTimeout( () => {
        setPay('true');
        setRequest('false');
      }, 3000);
    }
    else {
      setTimeout( () => {
        setPay('false');
        setRequest('false');
      }, 3000);
    };
  };

  function redirect() {
      setPay(null);
    window.location.replace('http://mobilepay.cf/');
  };

  function repeatPay() {
    setPay(null);
  };

  function showModalWindow() {
    if (pay === 'true') {
      return (
        <ModalWindow func={redirect()}>
          Оплата выполнена успешно!
        </ModalWindow>
      );
    }
    else if (pay === 'false') {
      return (
        <ModalWindow func={repeatPay()}>
          К сожалению, не удалось выполнить платеж.
          <br />
          Повторите попытку позднее.
        </ModalWindow>
      );
    }
    else {
      null
    };
  };

  function disabled() {
    let value = (
      (props.telValid === 'true' && props.summValid === 'true') || props.request === 'false' )
      ? false
      : true;
    return value;
  };

  return (
    <>
      <button onClick={toPay()} disabled={disabled()}>
        {request === 'true' ? <Spinner /> : 'Оплатить'}
      </button>
      {showModalWindow()}
    </>
  );
};

export default ButtonPay;
