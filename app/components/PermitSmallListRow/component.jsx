import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner/component';

const PermitSmallListRow = (props) => {
  const {
    href,
    fileName,
    loading,
    uploadDate,
    date,
  } = props;

  return (
    <tr className="govuk-table__row">
      {
        loading ? (<Spinner />) : (
          <>
            <td className="govuk-table__cell">{fileName}</td>
            <td className="govuk-table__cell">&nbsp;</td>
            <td className="govuk-table__cell">{uploadDate}</td>
            <td className="govuk-table__cell govuk-table__cell--numeric"><NavLink to={href}>{date}</NavLink></td>
          </>
        )
      }
    </tr>
  );
};

export default PermitSmallListRow;

PermitSmallListRow.propTypes = {
  date: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool,
  fileName: PropTypes.string,
  uploadDate: PropTypes.string,
};

PermitSmallListRow.defaultProps = {
  href: '/',
  date: null,
  fileName: null,
  uploadDate: null,
  loading: false,
};
