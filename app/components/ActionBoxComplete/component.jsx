/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/component';
import Tag from '../Tag/component';
import Details from '../Details/component';
import Paragraph from '../Paragraph/component';
import Column from '../Column/component';
import Row from '../Row/component';

const ActionBoxComplete = (props) => {
  const { children } = props;

  return (
    <div className="action-box-complete">
      <Heading level="h3">{children} <Tag modifier="govuk-right govuk-tag--complete">complete</Tag></Heading>
      <Row>
        <Column columnWidth="one-half">
          <Details title="See feedback">&nbsp;</Details>
        </Column>
        <Column columnWidth="one-half">
          <Paragraph modifier="govuk-right"><span className="govuk-!-font-weight-bold">Date completed:</span> 17/02/2020</Paragraph>
        </Column>
      </Row>
    </div>
  );
};

export default ActionBoxComplete;

ActionBoxComplete.propTypes = {
  children: PropTypes.element.isRequired,
};
