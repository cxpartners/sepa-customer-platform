import React from 'react';
import PropTypes from 'prop-types';
import WarningSymbol from '../WarningSymbol/component';

const Warning = (props) => {
  const { children, isInfo } = props;

  if (isInfo) {
    return (
      <div className="govuk-warning-text govuk-!-padding-top-5 govuk-!-padding-left-3 govuk-!-padding-bottom-5">
        <span className="govuk-warning-text__icon govuk-!-margin-left-3" aria-hidden="true">
          <svg width="8" height="16" className="govuk-warning-information-icon">
            <g fill="#FFF">
              <path d="M2.471.868c.444-.325.975-.487 1.6-.487.615 0 1.139.162 1.58.487.44.315.662.698.662 1.156 0 .457-.222.846-.663 1.17-.44.315-.964.473-1.58.473-.624 0-1.155-.163-1.599-.482-.44-.325-.658-.709-.658-1.161 0-.458.218-.841.658-1.156M7.437 15.714H.687v-.962h.745c.402 0 .68-.08.842-.237.167-.156.252-.433.252-.827V8.095c0-.353-.12-.625-.36-.817-.232-.191-.56-.287-.977-.287H.688v-.937l4.996-.197v8.204c0 .222.079.393.24.514.167.116.42.176.757.176h.756v.963z" />
            </g>
          </svg>
        </span>
        <span className="govuk-warning-text__text govuk-!-font-size-16">
          <span className="govuk-warning-text__assistive">Warning</span>
          {children}
        </span>
      </div>
    );
  }
  return (
    <div className="govuk-warning-text govuk-warning-text--warning govuk-!-padding-top-5 govuk-!-padding-left-3 govuk-!-padding-bottom-5">
      <span className="govuk-warning-text--warning__icon govuk-!-margin-left-3" aria-hidden="true">
        <WarningSymbol />
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
  isInfo: PropTypes.bool.isRequired,
};
