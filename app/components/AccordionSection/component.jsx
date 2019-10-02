import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AccordionSection = (props) => {
  const {
    children,
    heading,
    expanded,
    sectionKey,
    locked,
  } = props;

  const accordionSectionClassNames = classNames({
    'govuk-accordion__section': true,
    'govuk-accordion__section--expanded': expanded,
  });

  return (
    <div className={accordionSectionClassNames}>
      <div className="govuk-accordion__section-header">
        <h2 className="govuk-accordion__section-heading govuk-!-font-size-27">
          <span className="govuk-accordion__section-key">
            {`${sectionKey}/4`}
          </span>
          &nbsp;
          <span className="govuk-accordion__section-button" id={heading}>
            {heading}
          </span>
          {
            locked
              ? (
                <span className="govuk-accordion__lock-icon">
                  <svg role="presentation" focusable="false" width="11px" height="13px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 0C3.474 0 1.833 1.662 1.833 3.714v1.857H0V13h11V5.571H9.167V3.714C9.167 1.662 7.526 0 5.5 0zm0 1.857c1.09 0 1.833.752 1.833 1.857v1.857H3.667V3.714c0-1.105.742-1.857 1.833-1.857z" fill="#000" fillRule="nonzero" />
                  </svg>
                </span>
              ) : ''
          }
          <span className="govuk-accordion__icon" aria-hidden="true" />
        </h2>
      </div>
      <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby={heading}>
        {children}
      </div>
    </div>
  );
};

export default AccordionSection;

AccordionSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  locked: PropTypes.bool.isRequired,
  sectionKey: PropTypes.string.isRequired,
};
