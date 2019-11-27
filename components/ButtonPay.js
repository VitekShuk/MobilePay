import React, { useState, useEffect } from 'react';
import ModalWindow from '../components/ModalWindow';
import Spinner from '../components/Spinner';

const ButtonPay = (props) => {
  
  const [pay, setPay] = useState(null);
  const [request, setRequest] = useState('false');
  const [butdisab, setButdisab] = useState(null);

  useEffect(
    () => disabled
  );

  const toPay = () => {
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

  const redirect = () => {
      setPay(null);
    window.location.replace('http://mobilepay.cf/');
  };

  const repeatPay = () => {
    setPay(null);
  };

  const showModalWindow = () => {
    if (pay === 'true') {
      return (
        <ModalWindow func={redirect}>
          Оплата выполнена успешно!
        </ModalWindow>
      );
    }
    else if (pay === 'false') {
      return (
        <ModalWindow func={repeatPay}>
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

  const disabled = () => {
    ( (props.telValid === 'true' && props.summValid === 'true') || props.request === 'false' )
    ? setButdisab(null)
    : setButdisab('disabled');
  };

  return (
    <>
      <button onClick={toPay} disabled={butdisab}>
        {request === 'true' ? <Spinner /> : 'Оплатить'}
      </button>
      {showModalWindow()}
    </>
  );
};

export default ButtonPay;
