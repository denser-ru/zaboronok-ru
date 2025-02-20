// ./src/pages/Home.js
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import SectionLinks from '../components/SectionLinks';
import HomePageAbout from '../components/HomePageAbout';
function Home() {
  return (
    <Container>
      <Hero />
      <Row className='home-page-about'>
        <HomePageAbout />
      </Row>
      <NewsSection />
      <div className='mt-custom'>
        <SectionLinks />
      </div>
    </Container>
  );
}

export default Home;