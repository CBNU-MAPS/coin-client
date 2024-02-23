import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Bingo from './pages/Bingo/Bingo';
import Inaccess from './pages/Inaccess/Inaccess';
import './styles/font.scss';
import './styles/reset.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bingo/:roomCode" element={<Bingo />} />
        <Route path="/inaccess" element={<Inaccess />} />
      </Routes>
    </div>
  );
}

export default App;
