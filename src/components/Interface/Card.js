// import React from 'react';
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;

  /* React : Behind the Scenes */
  // return React.createElement('div', { className: classes }, props.children); // alternate for JSX code
}

export default Card;
