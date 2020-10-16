import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Tugas15/Nav';
import Routes from './Tugas15/Routes';
import { ThemeProvider } from './Tugas15/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Nav />
        <div className="App">
          <Routes />
        </div >
      </ThemeProvider>
    </Router>
  );
}

export default App;
