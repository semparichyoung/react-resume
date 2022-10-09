import React from 'react';

export default class HD extends React.Component {
  render() {
    return (
      <div className="header">
        <a id="headerHomeBtn" className="button">
          Home
        </a>
        <br />
        <a id="headerSkillsBtn" className="button">
          Skills
        </a>
        <br />
        <a id="headerAboutBtn" className="button">
          About Me
        </a>
        <br />
      </div>
    );
  }
}
