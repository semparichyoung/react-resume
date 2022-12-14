import React from 'react';
import Lang from './lang.js';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.clickHeader = this.clickHeader.bind(this);
  }
  clickHeader(this, title) {
    document.querySelectorAll('.content.show').forEach(function(v) {
      v.classList.remove('show');
    });
    document.getElementById(title + 'Div').classList.add('show');

    document.querySelectorAll('.button.active').forEach(function(v) {
      v.classList.remove('active');
    });
    document.getElementById('header' + title + 'Btn').classList.add('active');
  }
  componentDidMount() {
    document.getElementById('headerProfileBtn').click();
  }
  render() {
    const list = this.props.value.map((item) => (
      <a
        id={'header' + item.title.ENG + 'Btn'}
        ref={item.title.ENG}
        key={'header' + item.title.ENG + 'Btn'}
        className="button"
        onClick={this.clickHeader.bind(this, item.title.ENG)}
      >
        <Lang v={item.title}/>
      </a>
    ));
    return <div className="header">{list}</div>;
  }
}
