import React from 'react';
import './style.css';
import HD from './header.js';
import Profile from './profile.js';
import Experience from './experience.js';
import Skills from './skills.js';
import About from './about.js';
import Contact from './contact.js';

export default function App() {
  return (
    <div id="main">
      <h1>Shelob</h1>
      <HD />
      <Profile />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
