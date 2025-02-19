import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ВАЖНО: HashRouter
import Home from './pages/Home';
import Biography from './pages/Biography';
import Activities from './pages/Activities';
import Webinars from './pages/Webinars';
import SheetMusic from './pages/SheetMusic';
import Compositions from './pages/Compositions';
import Poems from './pages/Poems';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router> {/* Используем HashRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/sheetmusic" element={<SheetMusic />} />
        <Route path="/compositions" element={<Compositions />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;