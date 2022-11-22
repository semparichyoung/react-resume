import React from 'react';
import './style.css';
import Menu from './menu.js';
import Content from './content.js';
import Data from './data.json';
import HD from './header.js';

export default function App() {
  return (
    <div id="main" lang="ENG">
      <HD />
      <Menu value={Data} />
      <Content value={Data} />
    </div>
  );
}
