/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Heading from '../Heading/component';
import Tag from '../Tag/component';
import Paragraph from '../Paragraph/component';
import Column from '../Column/component';
import Row from '../Row/component';

const ActionBoxFitForPurpose = (props) => {
  const { children } = props;

  return (
    <div className="action-box-fit-for-purpose govuk-!-padding-bottom-1 govuk-!-margin-bottom-1">
      <RouterLink to="/permit-officer-reviewed-data-notification">
        <Heading level="h3">{children} <Tag modifier="govuk-right govuk-tag--complete">complete</Tag>
          <Row>
            <div className="govuk-!-margin-top-3">
              <Column columnWidth="full">
                <Paragraph modifier="govuk-right"><span className="govuk-!-font-weight-bold">Date completed:</span> 17/08/2019</Paragraph>
              </Column>
            </div>
          </Row>
        </Heading>
      </RouterLink>
    </div>
  );
};

export default ActionBoxFitForPurpose;

ActionBoxFitForPurpose.propTypes = {
  children: PropTypes.string.isRequired,
};
