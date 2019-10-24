import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ListOfOperators from '../components/ListOfOperators';
import ContentSection from '../components/ContentSection';
import styled from 'styled-components';

function Home() {
  return (
    <>
      <Head>
        <title>MobilePay - Оплата мобильной связи</title>
        <meta charset='utf-8' />
        <link rel='shortcut icon' href='../static/icon.png' type='image/png' />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Header />
      <Main>
        <ContentSection />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
