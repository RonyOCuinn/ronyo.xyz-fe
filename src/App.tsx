import React from 'react';
import './App.css';
import { CV } from './components/cv/CV.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ronan O'Cuinn
        </p>
        <CV />
      </header>
    </div>
  );
}

export default App;
