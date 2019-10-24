import React from 'react';
import styled from 'styled-components';

function SocialIcons() {
  return (
    <>
      <StyleImg href='#'>
        <img src='../static/social/fb.svg' alt='мы в facebook' />
      </StyleImg>
      <StyleImg href='#'>
        <img src='../static/social/twitter.svg' alt='мы в twitter' />
      </StyleImg>
      <StyleImg href='#'>
        <img src='../static/social/whatsapp.svg' alt='мы в whatsapp' />
      </StyleImg>
      <StyleImg href='#'>
        <img src='../static/social/youtube.svg' alt='мы в youtube' />
      </StyleImg>
    </>
  );
};

export default SocialIcons;

const StyleImg = styled.a`
  display: inline;
  margin: 5px;
`;
