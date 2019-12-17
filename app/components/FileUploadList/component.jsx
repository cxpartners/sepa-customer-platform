import React from 'react';
import PropTypes from 'prop-types';

const FileUploadList = (props) => {
  const { children } = props;

  return (
    <div className="file-upload-list">
      {children}
    </div>
  );
};

export default FileUploadList;

FileUploadList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
