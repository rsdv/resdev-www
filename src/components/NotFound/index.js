import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper'
import { Title, HomeButton, GoBackButton, ButtonGroup } from "./components";

const NotFound = ({ history }) => (
  <Wrapper>
    <Title>Something went <span>wrong</span></Title>
    <ButtonGroup>
      <HomeButton kind="home" onClick={(e) => {
        e.stopPropagation();
        history.push('/');
      }}>Go home</HomeButton>
      <GoBackButton kind="back" onClick={history.goBack}>Back</GoBackButton>
    </ButtonGroup>
  </Wrapper>
)

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    goBack: PropTypes.func
  }).isRequired,
};

export default NotFound;
