import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bingo from './pages/Bingo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bingo/:codeId" element={<Bingo />} />
      </Routes>
    </div>
  );
}

export default App;
