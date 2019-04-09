import React from 'react';

const PreviledgedDriverPermit = props => {
  const pass = 'password123';

  if (pass !== 'password123') {
    return <h3> You are not authorized </h3>;
  } else {
    return props.children;
  }
};

PreviledgedDriverPermit.propTypes = {};
export default PreviledgedDriverPermit;
