import React from 'react';
import styled from 'styled-components';

function ModalWindow(props) {
  return(
    <StyleModalWindow>
      <div>
        <form>
          <h3>Информационное сообщение:</h3>
          <p>{props.children}</p>
          <button  onClick={props.func}>Ok</button>
        </form>
      </div>
    </StyleModalWindow>
  );
};

export default ModalWindow;

const StyleModalWindow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  background: rgb(0, 0, 0, 0.5);
  text-align: center;

  form {
    display: inline-block;
    padding: 25px 5px 5px 5px;
    width: 400px;
    height: 200px;
    border: 1px solid rgb(255, 194, 9);
    vertical-align: middle;
    text-align: center;
    background: white;
    border-radius: 10px;
    opacity: 100%;
  };

  div {
    position: fixed;
    opacity: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  };

  div:before {
    opacity: 100%;
    display: inline-block;
    height: 100%;
    content: '';
    vertical-align: middle;
    text-align: center
  };

  button {
    margin: 10px;
    width: 180px;
    text-align: center
  };

  h3 {
    color: rgb(0, 0, 0);
  };

  @media (max-width: 445px) {
    {
      form {
        width: 280px;
        height: auto;
      };

    };
  };

`;
