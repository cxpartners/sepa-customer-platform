import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar/component';
import Link from '../Link/component';

const FileUploadStatus = (props) => {
  const {
    fileName,
    fileSize,
    uploadProgressValue,
  } = props;

  let fileMagnitude = '';
  let fileSizeMagnitude;

  if ((fileSize / 1024) < 1) {
    fileMagnitude = 'bites';
    fileSizeMagnitude = Math.round(fileSize);
  } else if ((fileSize / 1024 ** 2) < 1) {
    fileSizeMagnitude = Math.round(fileSize / 1024);
    fileMagnitude = 'KB';
  } else if ((fileSize / 1024 ** 3) < 1) {
    fileSizeMagnitude = Math.round(fileSize / 1024 ** 2);
    fileMagnitude = 'MB';
  } else {
    fileSizeMagnitude = Math.round(fileSize / 1024 ** 3);
    fileMagnitude = 'GB';
  }

  return (
    <div className="govuk-file-upload-status">
      <div>
        <span className="govuk-body govuk-file-upload-status--file-name">{fileName}</span>
        <span className="govuk-body govuk-file-upload-status--file-size">{`${fileSizeMagnitude}${fileMagnitude}`}</span>
      </div>
      <div>
        <span className="govuk-body govuk-file-upload-status--percent-uploaded">{`${uploadProgressValue}% uploaded`}</span>
        <Link modifier="govuk-body govuk-file-upload-status--cancel" href="/">Cancel</Link>
      </div>
      <ProgressBar progressValue={uploadProgressValue} />
    </div>
  );
};

export default FileUploadStatus;

FileUploadStatus.propTypes = {
  uploadProgressValue: PropTypes.number.isRequired,
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
};
