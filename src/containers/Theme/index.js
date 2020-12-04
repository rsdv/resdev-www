import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import themes from '../../themes'

const Theme = ({ value, children }) => {
  return <ThemeProvider theme={value || themes}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  value: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Theme;
