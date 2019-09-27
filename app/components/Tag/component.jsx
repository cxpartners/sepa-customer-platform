import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = (props) => {
  const { children, isStatus, isActive } = props;

  const tagClassNames = classNames({
    'govuk-tag': true,
    'govuk-tag--inactive': isStatus && !isActive,
    'govuk-tag--active': isActive,
  });

  return (
    <strong className={tagClassNames}>
      {children}
    </strong>
  );
};

export default Tag;

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  isStatus: PropTypes.bool,
  isActive: PropTypes.bool,
};

Tag.defaultProps = {
  isStatus: false,
  isActive: false,
};
