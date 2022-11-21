import React from 'react';
import { useContext } from 'react';
import { DataContext } from './App.js';

export default class HD extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.value.map((item) => (
      <a
        id="header{item.title}Btn"
        key="header{item.title}Btn"
        className="button"
      >
        {item.title}
      </a>
    ));
    return <div className="header">{list}</div>;
  }
}
