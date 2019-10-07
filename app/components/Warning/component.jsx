import React from 'react';
import PropTypes from 'prop-types';

const Warning = (props) => {
  const { children, isInfo } = props;

  if (isInfo) {
    return (
      <div className="govuk-warning-text govuk-warning-text--warning govuk-!-padding-top-5 govuk-!-padding-left-3 govuk-!-padding-bottom-5">
        <span className="govuk-warning-text--warning__icon govuk-!-margin-left-3" aria-hidden="true">
          <svg width="25" height="22" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.68 19.485L13.814.822C13.506.3 13.047 0 12.557 0c-.492 0-.951.3-1.258.82L.29 19.766c-.336.572-.383 1.18-.125 1.63.224.39.65.604 1.201.604h22.38c.476 0 .843-.198 1.06-.575.299-.523.25-1.301-.126-1.94zM14.137 6.361l-.65 9h-1.974l-.65-9h3.274zM12.49 19.796c-.955 0-1.691-.735-1.691-1.666 0-.952.736-1.688 1.691-1.688.955 0 1.714.735 1.714 1.688 0 .93-.76 1.666-1.714 1.666z" fill="#D4351C" fillRule="nonzero" />
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
};

export default Warning;

Warning.propTypes = {
  children: PropTypes.string.isRequired,
  isInfo: PropTypes.bool.isRequired,
};
