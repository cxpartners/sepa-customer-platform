import React from 'react';
// import PropTypes from 'prop-types';
import Paragraph from '../Paragraph/component';
import Button from '../Button/component';

const FileDrop = () => (
  <div className="govuk-file-drop">
    <Button aria-controls="filename" tabindex="0" modifier="govuk-button--secondary">Choose files</Button>
    <Paragraph>Or drag and drop your files onto this window</Paragraph>
  </div>
);

export default FileDrop;

// FileDrop.propTypes = {
//   children: PropTypes.element.isRequired,
// };
