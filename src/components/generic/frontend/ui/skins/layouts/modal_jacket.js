import React from 'react';

const ModalJacket = (props) => {
  return (
    <div style={{ border: '1px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default  ModalJacket ;