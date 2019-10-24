import React from 'react';
import TemplateOfList from '../components/TemplateOfList';

function MostOfOperators(props) {
  if ( props.index > 3 ) {
    return (
      <TemplateOfList item={props.item} />
    );
  }
  else {
    return null;
  };
};

export default MostOfOperators;
