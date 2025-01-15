import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doces from './pages/Doces';
import Salgados from './pages/Salgados';
import Pizzas from './pages/Pizzas';
import Infos from './pages/Infos';
import BottomMenu from './components/BottomMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doces" element={<Doces />} />
          <Route path="/salgados" element={<Salgados />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/infos" element={<Infos />} />
        </Routes>
        <BottomMenu />
      </div>
     
    </Router>
  );
}

export default App;
