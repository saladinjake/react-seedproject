import React, { Component } from 'react';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.states = { valid: true, value: '' };
  }
  getInitialState() {
    return { valid: true, value: '' };
  }

  attachEvents = e => {
    const user_name = e.target.value;
    if (!this.validate()) {
      this.setState({ valid: true, value: e.target.value });
    }
    this.setState({ valid: true, value: '' });
  };

  validate() {
    return true;
  }

  render() {
    <div>
      <input
        type="password"
        onChange={() => {
          this.attachEvents();
        }}
      />
    </div>;
  }
}

export { PasswordField };
