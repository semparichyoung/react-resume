import React from 'react';

export default class HD extends React.Component {
  render() {
    return (
      <div className="header">
        <a id="headerProfileBtn" className="button active">
          Profile
        </a>
        <br />
        <a id="headerExperienceBtn" className="button">
          Experience
        </a>
        <br />
        <a id="headerSkillsBtn" className="button">
          Skills
        </a>
        <br />
        <a id="headerAboutBtn" className="button">
          About Me
        </a>
        <a id="headerContactBtn" className="button">
          Contact Me
        </a>
        <br />
      </div>
    );
  }
}
