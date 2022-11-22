import React from 'react';
import './header.css';
import lang from './lang.js';

export default class HD extends React.Component {
  constructor(props) {
    super(props);
    this.switchLang = this.switchLang.bind(this);
    this.lang = 'ENG';
  }
  switchLang(this) {
    this.lang = this.lang == 'ENG' ? 'CHT' : 'ENG';
    document.getElementById('main').setAttribute('lang', this.lang);
  }
  render() {
    return (
      <div id="headerDiv">
        <img
          id="headerIcon"
          src="https://avatars.githubusercontent.com/u/5654836?v=4"
        />
        <h1>Shelob Yang</h1>
        <a id="switchLang" onClick={this.switchLang.bind(this)}>
          中/Eng
        </a>
      </div>
    );
  }
}
