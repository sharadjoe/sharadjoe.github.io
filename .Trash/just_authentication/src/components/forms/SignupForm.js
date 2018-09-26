import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'semantic-ui-react';
import { isEmail } from 'validator';
import InlineError from '../messages/InlineError';

class SignupForm extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
      passConf: '',
      username: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) {
      errors.email = 'Invalid Email Format';
    }
    if (!data.password) {
      errors.password = "Can't be blank";
    }
    if (!(data.password === data.passConf)) {
      errors.passConf = "The Passwords don't match";
    }
    if (!data.username) {
      errors.username = 'There must be a username';
    }
    return errors;
  };
  onSubmit = e => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            placeholder="johndoe@gmail.com"
            name="email"
            value={data.email}
            onChange={this.onChange}
            id="email"
          />
        </Form.Field>
        {errors.email && <InlineError text={errors.email} />}
        <Form.Field error={!!errors.username}>
          <label htmlFor="text">Username</label>
          <Input
            type="text"
            placeholder="johndoe"
            name="username"
            value={data.username}
            onChange={this.onChange}
            id="username"
          />
        </Form.Field>
        {errors.username && <InlineError text={errors.username} />}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Something Strong"
            name="password"
            value={data.password}
            onChange={this.onChange}
            id="password"
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password} />}
        <Form.Field error={!!errors.passConf}>
          <label htmlFor="password">Password Confirmation</label>
          <Input
            type="password"
            placeholder="Repeat What You Just Typed"
            name="passConf"
            value={data.passConf}
            onChange={this.onChange}
            id="passConf"
          />
        </Form.Field>
        {errors.passConf && <InlineError text={errors.passConf} />}
        <br />
        <Button primary>SignUp</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
