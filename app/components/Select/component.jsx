import React from 'react';
import history from '../../history';

const Select = () => (
  <div className="govuk-form-group govuk-form-group__right">
    <select
      className="govuk-select"
      id="sort"
      name="sort"
      onChange={(e) => history.push(e.target.value)}
    >
      <option value="car-number">CAR number</option>
      <option value="sort-by" selected>Sort by</option>
      <option value="site-name">Site name</option>
      <option value="/#/permit-officer-sort">Assigned officer (A - Z)</option>
      <option value="last-updated">Last updated</option>
    </select>
  </div>
);

export default Select;
