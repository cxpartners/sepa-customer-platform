import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { progressValue } = props;

  return (
    <div className="govuk-progress-bar">
      <progress className="govuk-upload-status__bar" value={progressValue} max="100">{`${progressValue} %`}</progress>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progressValue: PropTypes.string.isRequired,
};
