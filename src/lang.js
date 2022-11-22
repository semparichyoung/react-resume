import React from 'react';

export default class lang extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let text = {};
    console.log(this.props.v);
    return 'test';
    if (typeof this.props.v == 'string') {
      text = {
        ENG: this.props.v,
        CHT: this.props.v,
      };
    } else if (typeof this.props.v == 'array') {
      text = this.props.v;
    }
    let cont = [];
    for (let lang in text) {
      cont = (
        <span>
          <span lang={lang}>{text[lang]}</span>
          <span lang={lang}>{text[lang]}</span>
        </span>
      );
    }
    return cont;
  }
}
