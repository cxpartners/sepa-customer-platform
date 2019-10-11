import React from 'react';

const Select = () => (

  <div className="govuk-form-group govuk-form-group__right">
    <select className="govuk-select" id="sort" name="sort">
      <option value="car-number">CAR number</option>
      <option value="sort-by" selected>Sort by</option>
      <option value="site-name">Site name</option>
      <option value="water-body">Water body</option>
      <option value="last-updated">Last updated</option>
    </select>
  </div>
);

export default Select;
