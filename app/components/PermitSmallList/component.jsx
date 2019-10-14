import React from 'react';
import PropTypes from 'prop-types';

const PermitSmallList = (props) => {
  const { children, caption } = props;

  return (
    <table className="govuk-table">
      <caption className="govuk-table__caption">{caption}</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          <th scope="col" className="govuk-table__header">File Name</th>
          <th scope="col" className="govuk-table__header">&nbsp;</th>
          <th scope="col" className="govuk-table__header">Upload date</th>
          <th scope="col" className="govuk-table__header govuk-table__header--numeric">&nbsp;</th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        {children}
      </tbody>
    </table>
  );
};

export default PermitSmallList;

PermitSmallList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  caption: PropTypes.string.isRequired,
};
