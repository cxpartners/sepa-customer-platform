/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/component';

const Toggle = (props) => {
  const {
    children,
    href,
    onClick,
    modifier,
  } = props;

  return (
    <Link onClick={onClick} href={href} modifier={`govuk-toggle govuk-link--no-visited-state ${modifier}`}>
      {children}
    </Link>
  );
};

export default Toggle;

Toggle.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  modifier: PropTypes.string,
};

Toggle.defaultProps = {
  modifier: '',
};
