import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Tag from '../Tag/component';
import Spinner from '../Spinner/component';

const PermitListRow = (props) => {
  const {
    href,
    isActive,
    listKey,
    loading,
    status,
    siteName,
    waterBody,
    date,
  } = props;

  return (
    <tr className="govuk-table__row">
      {
        loading ? (<Spinner />) : (
          <>
            <th scope="row" className="govuk-table__header"><NavLink to={href}>{listKey}</NavLink></th>
            <td className="govuk-table__cell govuk-!-width-one-quarter">{status ? <Tag isActive={isActive} isStatus={status}>{status}</Tag> : ''}</td>
            <td className="govuk-table__cell">{siteName}</td>
            <td className="govuk-table__cell">{waterBody}</td>
            <td className="govuk-table__cell govuk-table__cell--numeric">{date}</td>
          </>
        )
      }
    </tr>
  );
};

export default PermitListRow;

PermitListRow.propTypes = {
  date: PropTypes.string.isRequired,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  loading: PropTypes.bool,
  listKey: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  status: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
  waterBody: PropTypes.string.isRequired,
};

PermitListRow.defaultProps = {
  href: '/',
  isActive: false,
  loading: false,
  status: false,
};
