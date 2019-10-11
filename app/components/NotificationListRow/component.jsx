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
    notificationType,
    respondBy,
    date,
  } = props;

  return (
    <tr className="govuk-table__row">
      {
        loading ? (<Spinner />) : (
          <>
            <th scope="row" className="govuk-table__header"><NavLink to={href}>{listKey}</NavLink></th>
            <td className="govuk-table__cell govuk-!-width-one-quarter">{status ? <Tag isActive={isActive} isStatus={status}>{status}</Tag> : ''}</td>
            <td className="govuk-table__cell">{notificationType}</td>
            <td className="govuk-table__cell">{respondBy}</td>
            <td className="govuk-table__cell govuk-table__cell--numeric">{date}</td>
          </>
        )
      }
    </tr>
  );
};

export default PermitListRow;

PermitListRow.propTypes = {
  date: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  loading: PropTypes.bool,
  listKey: PropTypes.string,
  notificationType: PropTypes.string,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  respondBy: PropTypes.string,
};

PermitListRow.defaultProps = {
  href: '/',
  date: null,
  listKey: null,
  notificationType: null,
  respondBy: null,
  isActive: false,
  loading: false,
  status: false,
};
