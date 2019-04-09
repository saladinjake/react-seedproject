import React from 'react';

const Card = props => {
  const style = {
    background: 'lightgrey',
  };

  return <div style={style}>{props.children}</div>;
};

Card.propTypes = {};
export default Card;
