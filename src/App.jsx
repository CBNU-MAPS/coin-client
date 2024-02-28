import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Bingo from './pages/Bingo/Bingo';
import Result from './pages/Result/Result';
import Inaccess from './pages/Inaccess/Inaccess';
import NotFound from './pages/NotFound/NotFound';
import './styles/font.scss';
import './styles/reset.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bingo/:roomCode" element={<Bingo />} />
        <Route path="/result/:roomCode" element={<Result />} />
        <Route path="/inaccess" element={<Inaccess />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
