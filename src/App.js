import React from 'react';
import Weather from './components/Weather';
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Weather/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
