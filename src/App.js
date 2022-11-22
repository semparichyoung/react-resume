import React from 'react';
import './style.css';
import Menu from './menu.js';
import Content from './content.js';
import Data from './data.json';

export default function App() {
  return (
    <div id="main">
      <h1>Shelob</h1>
      <Menu value={Data} />
      <Content value={Data} />
    </div>
  );
}
