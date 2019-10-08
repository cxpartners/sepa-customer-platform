import React from 'react';
import PropTypes from 'prop-types';

const Warning = (props) => {
  const { children } = props;

  return (
    <div className="govuk-warning-text govuk-!-padding-top-5 govuk-!-padding-left-3 govuk-!-padding-bottom-5">
      <span className="govuk-warning-text__icon govuk-!-margin-left-3" aria-hidden="true">
        <svg role="presentation" focusable="false" className="govuk-warning-information-icon" width="8px" height="16px" viewBox="0 0 8 16">
          <g id="2.1-Slice-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="1.1-Permits-overview-page-✓" transform="translate(-201.000000, -344.000000)" fill="#FFFFFF">
              <g id="Body" transform="translate(164.000000, 254.000000)">
                <g id="Notification" transform="translate(0.000000, 63.000000)">
                  <g id="Group" transform="translate(27.000000, 24.000000)">
                    <g id="Group-2" transform="translate(10.687500, 3.380952)">
                      <path d="M1.78375338,0.486906333 C2.22720206,0.162141495 2.75822116,-4.21884749e-15 3.38339491,-4.21884749e-15 C3.99836308,-4.21884749e-15 4.52246872,0.162382419 4.96262528,0.486906333 C5.40311105,0.801793309 5.625,1.18510255 5.625,1.64285714 C5.625,2.10012989 5.40311105,2.48898037 4.96262528,2.81350428 C4.52246872,3.12839126 3.99803387,3.28571429 3.38339491,3.28571429 C2.75822116,3.28571429 2.22720206,3.12333187 1.78375338,2.80362642 C1.34359682,2.47886158 1.125,2.09531142 1.125,1.64285714 C1.125,1.18510255 1.34359682,0.801793309 1.78375338,0.486906333" id="Fill-1" />
                      <path d="M6.74971278,15.3333333 L2.22044605e-15,15.3333333 L2.22044605e-15,14.3710167 L0.74476618,14.3710167 C1.14630229,14.3710167 1.42490745,14.2903095 1.58632611,14.1343249 C1.75348921,13.9780934 1.83850687,13.7009245 1.83850687,13.3075076 L1.83850687,7.71378017 C1.83850687,7.36084025 1.71844815,7.08885439 1.47775627,6.89732896 C1.24625548,6.70580352 0.917673716,6.6100408 0.501489298,6.6100408 L2.22044605e-15,6.6100408 L2.22044605e-15,5.67265213 L4.99622356,5.47619048 L4.99622356,13.6801924 C4.99622356,13.901582 5.07549679,14.0733625 5.23662823,14.1943 C5.40379133,14.3100544 5.65597209,14.3705231 5.99345773,14.3705231 L6.75,14.3705231 L6.75,15.3333333 L6.74971278,15.3333333 Z" id="Fill-4" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <span className="govuk-warning-text__text govuk-!-font-size-16">
        <span className="govuk-warning-text__assistive">Warning</span>
        {children}
      </span>
    </div>
  );
};

export default Warning;

Warning.propTypes = {
  children: PropTypes.string.isRequired,
};
