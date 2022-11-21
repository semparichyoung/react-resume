import React from 'react';
import './style.css';
import HD from './header.js';
import Content from './content.js';
import Data from './data.json';

export default function App() {
  return (
    <div id="main">
      <h1>Shelob</h1>
      <HD value={Data} />
      <Content value={Data} />
    </div>
  );
}
