import React from 'react';
import Weather from './components/Weather';
import MyHeader from './components/MyHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <MyHeader/>
      <Routes>
        <Route path='/' element={<Weather/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
