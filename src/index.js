import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button'
//import App from './App';

const App = () => {
  return (
    <div>
      <div>Genival Silva</div>
      <div>
        <Button />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)