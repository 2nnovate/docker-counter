import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const clickCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-counter">{count}</div>
        <p>
          <a
            className="counter"
            onClick={clickCounter}
          >
            Click me!
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
