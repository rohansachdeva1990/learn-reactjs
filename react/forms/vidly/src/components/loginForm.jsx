import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginFrom extends Component {
  username = React.createRef();

  state = {
    account: {
      username: '',
      password: '',
    },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password'),
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      console.log(item.message);
      errors[item.path[0]] = item.message;
    }

    console.log(errors);
    return errors;
  };

  // To avoid the page to reload on submission
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;

    // Call the server, save the changes and redirect to app
    console.log('Submitted');
  };

  validateProperty = ({ name, value }) => {
    // Here we have used the computed property, so whatever the value of name, will now become the
    // the lvalue in object definition
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    //account.username = e.currentTarget.value;
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={account.username}
            label='Username'
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            value={account.password}
            label='Password'
            onChange={this.handleChange}
            type='password'
            error={errors.password}
          />

          <button
            type='submit'
            className='btn btn-primary'
            disabled={!!this.validate()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginFrom;
