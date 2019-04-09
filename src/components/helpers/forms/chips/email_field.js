import React, { Component } from 'react';

class EmailField extends Component {
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
    const errorNotice = this.state.valid ? 'no-error-class' : 'error-class';
    <div className={errorNotice}>
      <input
        type="email"
        onChange={() => {
          this.attachEvents();
        }}
      />
    </div>;
  }
}

export { NameField };
