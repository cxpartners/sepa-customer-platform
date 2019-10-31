import React from 'react';
import PropTypes from 'prop-types';
import FileInput from '../FileInput/component';
import Paragraph from '../Paragraph/component';

const FileDrop = (props) => {
  const { onChange } = props;

  return (
    <div className="govuk-file-drop">
      <FileInput id="file-upload" onChange={onChange} />
      <Paragraph>Or drag and drop your files onto this window</Paragraph>
    </div>
  );
};

export default FileDrop;

FileDrop.propTypes = {
  onChange: PropTypes.func.isRequired,
};
