import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/page/Home/Home';
import { HomePrueba } from './components/page/HomePrueba/HomePrueba';
import Login from './components/page/Login/Login';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HomePrueba' element={<HomePrueba />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </>
  )
}
export default App;
