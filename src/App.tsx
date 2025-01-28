import React from 'react';
import './App.css';
import { Counter } from './Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ronan O'Cuinn
        </p>
        <p>
          <Counter />
        </p>
      </header>
    </div>
  );
}

export default App;
