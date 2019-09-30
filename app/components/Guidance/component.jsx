import React from 'react';
import PropTypes from 'prop-types';

const Guidance = (props) => {
  const { children } = props;

  return (
    <nav>
      {children}
    </nav>
  );
};

export default Guidance;

Guidance.propTypes = {
  children: PropTypes.element.isRequired,
};
