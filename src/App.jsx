import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/page/Home/Home';
import Login from './components/page/Login/Login';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </>
  )
}
export default App;
