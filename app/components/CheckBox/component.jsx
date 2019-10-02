import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const {
    checked,
    value,
    onClick,
  } = props;

  return (
    <div className="govuk-checkboxes__item">
      <input className="govuk-checkboxes__input" id={value} name={value} type="checkbox" value={value} onClick={onClick} checked={checked} />
      <label className="govuk-label govuk-checkboxes__label" htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
