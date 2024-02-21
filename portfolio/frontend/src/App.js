import React from 'react';
import './App.css';
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace the default content with the Home component */}
        <Home />
      </header>
    </div>
  );
}

export default App;
