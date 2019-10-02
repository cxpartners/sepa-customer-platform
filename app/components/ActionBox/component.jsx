import React from 'react';
import PropTypes from 'prop-types';

const ActionBox = (props) => {
  const {
    children,
    locked,
  } = props;

  return (
    <div className="action-box">
      {
        locked
          ? (
            <span className="govuk-action-box__lock-icon">
              <svg role="presentation" focusable="false" width="11px" height="13px" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 0C3.474 0 1.833 1.662 1.833 3.714v1.857H0V13h11V5.571H9.167V3.714C9.167 1.662 7.526 0 5.5 0zm0 1.857c1.09 0 1.833.752 1.833 1.857v1.857H3.667V3.714c0-1.105.742-1.857 1.833-1.857z" fill="#000" fillRule="nonzero" />
              </svg>
            </span>
          ) : ''
        }
      {children}
    </div>
  );
};

export default ActionBox;

ActionBox.propTypes = {
  children: PropTypes.element.isRequired,
  locked: PropTypes.bool.isRequired,
};
