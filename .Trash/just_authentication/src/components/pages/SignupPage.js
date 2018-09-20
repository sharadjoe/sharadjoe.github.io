import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users';
import { connect } from 'react-redux';
class SignupPage extends React.Component {
  submit = data => {
    this.props.signup(data).then(() => this.props.history.push('/dash'));
  };
  render() {
    return (
      <div>
        <h1>Signup Page</h1>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { signup }
)(SignupPage);
