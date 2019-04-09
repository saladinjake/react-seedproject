import React, { Component } from 'react';

class NameField extends Component {
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
    this.setState({ valid: true, value: e.target.value });
  };

  clear() {
    this.setState({ valid: true, value: '' });
  }

  validate() {
    return true;
  }

  render({ placeholder }) {
    <div>
      <input
        type="text"
        onChange={() => {
          this.attachEvents();
        }}
        placeholder={placeholder}
      />
    </div>;
  }
}

export { NameField };
