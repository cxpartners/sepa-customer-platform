import React from 'react';
import PropTypes from 'prop-types';

const ActionBox = (props) => {
  const { children } = props;

  return (
    <div className="action-box">
      {children}
    </div>
  );
};

export default ActionBox;

ActionBox.propTypes = {
  children: PropTypes.element.isRequired,
};
