import React from 'react';
import { Container } from 'react-bootstrap'; // Импортируем нужные компоненты
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import SectionLinks from '../components/SectionLinks';

function Home() {
  return (
    <Container>
      <Hero />
      <NewsSection />
      <div className='mt-custom'>
        <SectionLinks />
      </div>
    </Container>
  );
}

export default Home;