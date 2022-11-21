import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const contents = this.props.value.map((item) => (
      <div
        id={item.title + 'Div'}
        key={item.title + 'Div'}
        className="contentDiv {item.title}Div content"
      >
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
    ));
    return <div id="content">{contents}</div>;
  }
}
