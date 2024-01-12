import React from 'react';
import Weather from './components/Weather';
import MyNav from './components/MyNav';
import Prevision from './components/Prevision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Weather/>}></Route>
        <Route path='/Prevision' element={<Prevision/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
