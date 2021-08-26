import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import './index.css';

function render(): void {
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
}

render();


