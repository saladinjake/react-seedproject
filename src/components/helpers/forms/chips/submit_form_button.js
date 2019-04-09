import React, { Component } from 'react';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.states = { valid: true, value: '' };
  }
  getInitialState() {
    return { valid: true, value: '' };
  }

  validate() {
    return true;
  }

  render({ buttonName, attachEvents }) {
    <div>
      <button
        onClick={() => {
          attachEvents();
        }}
      >
        {buttonName}
      </button>
    </div>;
  }
}

export { PasswordField };
