import React from 'react';
import styled from 'styled-components';

class OperatorName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operName: undefined
    };
  };

  componentDidMount() {
    let url = window ? window.location.href : '';
    let operName = decodeURI( url.replace(/.*operator=/,``) )
    this.setState({
      operName: operName
    });
  };

  render() {
    return (
      <StyleOperName>
        «{this.state.operName}»
      </StyleOperName>
    );
  };
};

export default OperatorName;

const StyleOperName = styled.h3`
  color: rgb( 0, 0, 0 ,0.75);
`;
