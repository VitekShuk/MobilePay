import React, { useState } from 'react';
import ModalWindow from '../components/ModalWindow';
import Spinner from '../components/Spinner';

class ButtonPay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pay: undefined,
      request: 'false'
    };

    this.redirect = this.redirect.bind(this);
    this.repeatPay = this.repeatPay.bind(this);
    this.toPay = this.toPay.bind(this);
    this.disabled = this.disabled.bind(this);

  };

  toPay() {
    this.setState({ request: 'true' })
    if (Math.random() > 0.5) {
      setTimeout( () => this.setState({
        pay: 'true',
        request: 'false'
      }), 3000);
    }
    else {
      setTimeout( () => this.setState({
        pay: 'false',
        request: 'false'
      }), 3000);
    };
  };

  redirect() {
    this.setState({
      pay: undefined
    });
    window.location.replace('http://mobilepay.cf/');
  };

  repeatPay() {
    this.setState({
      pay: undefined
    });
  };

  showModalWindow() {
    if (this.state.pay == 'true') {
      return (
        <ModalWindow func={this.redirect}>
          Оплата выполнена успешно!
        </ModalWindow>
      );
    }
    else if (this.state.pay == 'false') {
      return (
        <ModalWindow func={this.repeatPay}>
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

  disabled() {
    let value = (
      (this.props.telValid == 'true' && this.props.summValid == 'true') || this.props.request == 'false' )
      ? false
      : true;
    return value;
  };

render() {
    return (
      <>
        <button onClick={this.toPay} disabled={this.disabled()}>
          {this.state.request == 'true' ? <Spinner /> : 'Оплатить'}
        </button>
        {this.showModalWindow()}
      </>
    );
  };
};

export default ButtonPay;
