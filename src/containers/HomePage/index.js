import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

function HomePage() {
  return (
    <Wrapper>
      <img alt="logo" src={require('assets/images/logo.png')} />
      <h1>React boilerplate</h1>
      <p>React, Redux, Redux-Saga, React-Router v4, Styled-Components, Antd, font-awesome</p>
      <Link to="/auth">Go to Auth Page</Link>
    </Wrapper>
  );
}

export default HomePage;
