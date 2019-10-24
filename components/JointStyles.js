import styled from 'styled-components';

export const StyleOperator = styled.a`
  display: inline-block;
  cursor: pointer;
  position: relative;
  height: auto;
  min-width: 300px;
  margin: 10px;
  padding: 0px 20px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0, 0.8);
  text-align: left;

  @media (max-width: 445px) {
    {
      min-width: 210px;
    };
  };
`;

export const StyleImg = styled.div`
  display: inline-block;
  top: 50%;
  margin: 5px;
  margin-top: 0.625em;
`;

export const StyleLink = styled.div`
  margin: 15px;

  a {
    color: rgb(105, 186, 105);
  };

  a:hover {
    color: rgb(255, 255, 255, 0.6);
  }
`;

export const StyleSection = styled.section`
  position: relative;
  max-width: 1080px;
  height: auto;
  margin: 20px auto;
  padding: 0 20px;
  border: solid 1px rgb(255, 255, 255);
  border-radius: 10px;

  h1 {
    font-size: 28px;
  };

  p {
    font-size: 20px;
  };

  h1,
  p {
    text-align: center;
    color: rgb(0, 0, 0, 0.7);
  };

  @media (max-width: 695px) {
    {
      padding: 0 5px;
      border: none;
      text-align: center;
    }
  };

  @media (max-width: 1192px) {
    {
      text-align: center;
    }
  };
`;
