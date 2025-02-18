import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Header from './components/Header'; // Импортируем Header
import Footer from './components/Footer'; // Импортируем Footer

function App() {
  return (
    <Router>
      <Header /> {/* Добавляем Header */}
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
        <Route path="*" element={<div>404 Not Found</div>} /> {/* Страница 404 */}
      </Routes>
      <Footer /> {/* Добавляем Footer */}
    </Router>
  );
}

export default App;