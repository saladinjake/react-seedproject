import React from 'react';

const PreviledgedUserPermit = props => {
  const pass = 'password123';

  if (pass !== 'password123') {
    return <h3> You are not authorized </h3>;
  } else {
    return props.children;
  }
};

PreviledgedUserPermit.propTypes = {};
export default PreviledgedUserPermit;
