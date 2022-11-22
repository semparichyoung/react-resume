import React from 'react';

export default class HD extends React.Component {
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
  render() {
    const list = this.props.value.map((item) => (
      <a
        id={'header' + item.title + 'Btn'}
        ref={item.title}
        key={'header' + item.title + 'Btn'}
        className="button"
        onClick={this.clickHeader.bind(this, item.title)}
      >
        {item.title}
      </a>
    ));
    return <div className="header">{list}</div>;
  }
}
