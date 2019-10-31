import React from 'react';
import PropTypes from 'prop-types';
import WarningSymbol from '../WarningSymbol/component';

const UploadStatus = (props) => {
  const { children } = props;

  return (
    <div className="govuk-upload-status">
      <WarningSymbol />
      <span className="govuk-body-s">
        {children}
      </span>
    </div>
  );
};

export default UploadStatus;

UploadStatus.propTypes = {
  children: PropTypes.element.isRequired,
};
