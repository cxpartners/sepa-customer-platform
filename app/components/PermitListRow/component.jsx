import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Tag from '../Tag/component';

const PermitListRow = (props) => {
  const {
    listKey,
    href,
    isActive,
    status,
    siteName,
    waterBody,
    date,
  } = props;

  return (
    <tr className="govuk-table__row">
      <th scope="row" className="govuk-table__header"><NavLink to={href}>{listKey}</NavLink></th>
      <td className="govuk-table__cell govuk-!-width-one-quarter">{status ? <Tag isActive={isActive} isStatus={status}>{status}</Tag> : ''}</td>
      <td className="govuk-table__cell">{siteName}</td>
      <td className="govuk-table__cell">{waterBody}</td>
      <td className="govuk-table__cell govuk-table__cell--numeric">{date}</td>
    </tr>
  );
};

export default PermitListRow;

PermitListRow.propTypes = {
  listKey: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  status: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
  waterBody: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string,
};

PermitListRow.defaultProps = {
  href: '/',
  isActive: false,
  status: false,
};
