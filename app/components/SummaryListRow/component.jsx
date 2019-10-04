import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SummaryListRow = (props) => {
  const {
    listKey,
    children,
    href,
    addLinks,
    addEdit,
  } = props;

  return (
    <div key={listKey} className="govuk-summary-list__row">
      <dt className="govuk-summary-list__key">
        {listKey}
      </dt>
      <dd className="govuk-summary-list__value">
        {children}
      </dd>
      {
        addLinks
          ? (
            <dd className="govuk-summary-list__actions">
              {
                addEdit
                  ? (
                    <>
                      <NavLink className="govuk-link" to={href}>
                        Edit
                        <span className="govuk-visually-hidden">{listKey}</span>
                      </NavLink>
                      &nbsp;
                      &nbsp;
                      <NavLink className="govuk-link" to={href}>
                        Remove
                        <span className="govuk-visually-hidden">{listKey}</span>
                      </NavLink>
                    </>
                  ) : (
                    <NavLink className="govuk-link" to={href}>
                      Change
                      <span className="govuk-visually-hidden">{listKey}</span>
                    </NavLink>
                  )
              }
            </dd>
          )
          : ''
      }
    </div>
  );
};

export default SummaryListRow;

SummaryListRow.propTypes = {
  listKey: PropTypes.string.isRequired,
  children: PropTypes.node,
  href: PropTypes.string,
  addLinks: PropTypes.bool,
  addEdit: PropTypes.bool,
};

SummaryListRow.defaultProps = {
  href: '#',
  children: null,
  addLinks: false,
  addEdit: false,
};
