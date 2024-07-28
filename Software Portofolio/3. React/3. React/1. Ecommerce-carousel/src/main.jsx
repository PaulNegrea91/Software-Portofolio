import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import './style.css';

function App() {
  return (
    <>
      <div className="App">
        <Carousel />
      </div>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
