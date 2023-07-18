import React from 'react';
import { BrowserRouter as Router,Route, Routes,Navigate } from 'react-router-dom';
import CooksPage from './Pages/CooksPage';
import WaitersPage from './Pages/WaiterPage';
import {  } from 'react-router'

const App = () => {
  return (
    <Router>    
        <Routes>
          <Route path="/cooks" element={<CooksPage />} />
          <Route path="/waiters" element={<WaitersPage />} />
          <Route path="/" element={<Navigate to="/cooks" />} />
        </Routes>  
    </Router>
  );
};

export default App;