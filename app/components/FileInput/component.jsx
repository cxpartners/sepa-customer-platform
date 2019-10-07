import React from 'react';
import PropTypes from 'prop-types';

const FileInput = (props) => {
  const { id } = props;

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={id}>
        Upload a file
      </label>
      <input className="govuk-file-upload" id={id} name={id} type="file" />
    </div>
  );
};

export default FileInput;

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
};
