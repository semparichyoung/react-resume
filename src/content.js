import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const content = this.props.value.map((item) => (
      <div
        id="{item.title}Div"
        key="{item.title}Div"
        className="conetntDiv {item.title}Div content show"
      >
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
    ));
    return <div id="content">{content}</div>;
  }
}
