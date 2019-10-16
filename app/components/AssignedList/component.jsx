import React from 'react';
import PropTypes from 'prop-types';

const AssignedList = (props) => {
  const { children, caption, dateColumn } = props;

  return (
    <table className="govuk-table">
      <caption className="govuk-table__caption">{caption}</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">CAR Number</th>
          <th scope="col" className="govuk-table__header govuk-!-width-one-quarter">&nbsp;</th>
          <th scope="col" className="govuk-table__header">Site name</th>
          <th scope="col" className="govuk-table__header">Assigned officer</th>
          <th scope="col" className="govuk-table__header govuk-table__header--numeric">{dateColumn}</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        {children}
      </tbody>
    </table>
  );
};

export default AssignedList;

AssignedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  caption: PropTypes.string.isRequired,
  dateColumn: PropTypes.string.isRequired,
};
