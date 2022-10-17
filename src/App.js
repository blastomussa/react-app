import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>
      </div>
    );
  };
  
  export default App;