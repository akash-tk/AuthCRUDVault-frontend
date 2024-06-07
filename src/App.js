import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;