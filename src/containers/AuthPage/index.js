import React from 'react';
import { connect } from 'react-redux';

import { login } from 'redux/actions/auth';

import Wrapper from './Wrapper';

function AuthPage({ login }) {
  return (
    <Wrapper>
      You must log in to go to Home page. <button onClick={() => login()}>Log in</button>
    </Wrapper>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login,
};

export default connect(
  null,
  mapDispatchToProps
)(AuthPage);
