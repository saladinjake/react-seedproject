import React from 'React';
import BaseContent from '../base.js';
import NameField from '../chips/name_field.js';
import PasswordField from '../chips/password_field.js';

const LoginForm = () => {
  attachEvents = e => {
    if (!this.refs.userid.state.valid) {
      alert('error');
    }
    //send to server
  };

  return (
    <BaseFormContent>
      <NameField type="username" placeholder="username or email" ref="userid" />
      <PasswordField ref="pass" />
      <SubmitFormButton buttonName="Login" attachEvents={attachEvents} />
    </BaseFormContent>
  );
};
