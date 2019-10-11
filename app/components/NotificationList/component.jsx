import React from 'react';
import PropTypes from 'prop-types';

const PermitList = (props) => {
  const { children, caption } = props;

  return (
    <table className="govuk-table">
      <caption className="govuk-table__caption">{caption}</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">CAR Number</th>
          <th scope="col" className="govuk-table__header govuk-!-width-one-quarter">&nbsp;</th>
          <th scope="col" className="govuk-table__header">Notification type</th>
          <th scope="col" className="govuk-table__header">Date</th>
          <th scope="col" className="govuk-table__header govuk-table__header--numeric">Respond by</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        {children}
      </tbody>
    </table>
  );
};

export default PermitList;

PermitList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  caption: PropTypes.string.isRequired,
};
