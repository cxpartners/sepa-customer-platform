/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Heading from '../Heading/component';
import Tag from '../Tag/component';

const ActionBoxFitForPurpose = (props) => {
  const { children } = props;

  return (
    <div className="action-box-fit-for-purpose govuk-!-padding-bottom-3 govuk-!-margin-bottom-3 ">
      <RouterLink to="/permit-officer-reviewed-data-notification">
        <Heading level="h3">{children} <Tag modifier="govuk-right govuk-tag--complete">complete</Tag></Heading>
      </RouterLink>
    </div>
  );
};

export default ActionBoxFitForPurpose;

ActionBoxFitForPurpose.propTypes = {
  children: PropTypes.string.isRequired,
};
