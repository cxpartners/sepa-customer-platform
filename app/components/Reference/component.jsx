import React from 'react';
import PropTypes from 'prop-types';

const Reference = (props) => {
  const { children } = props;

  return (
    <span className="govuk-body govuk-body__reference">
      Ref:
      &nbsp;
      <strong>{children}</strong>
    </span>
  );
};

export default Reference;

Reference.propTypes = {
  children: PropTypes.string.isRequired,
};
