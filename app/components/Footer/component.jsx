/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { href } = props;
  return (
    <footer className="govuk-footer " role="contentinfo">
      <div className="govuk-width-container ">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <span className="govuk-footer__links">
              <a className="govuk-link" href="/">Cookies</a> | <a className="govuk-link" href="/">Privacy Policy</a> | <a className="govuk-link" href="/">Accessibility</a>
            </span>
            <span className="govuk-footer__licence-description block govuk-!-padding-top-3">
            &copy; Lorem ipsum dolor sit amet delor amet. Sit dolus.
            </span>
          </div>
          <Link to={href}>
            <div className="govuk-footer__meta-item">
              <svg role="presentation" focusable="false" className="govuk-header__logotype-crown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.103 93.092" height="94" width="150"><g data-name="sepa logo"><path d="M116.37 60.289V36.924c.718-.062 1.4-.062 2.081-.185a3.078 3.078 0 0 0 2.142-1.516.686.686 0 0 1 .522-.246c1.742-.021 3.485-.011 5.227-.011h18.3A26.181 26.181 0 0 1 136.836 52a27.552 27.552 0 0 1-20.466 8.289z" fill="#005782" /><path d="M114.167 60.3c-1.773 0-3.443.011-5.114-.01a.647.647 0 0 1-.43-.328q-1.476-2.505-2.921-5.042a.84.84 0 0 0-.84-.492q-7.5.032-15.013 0a.78.78 0 0 0-.79.482q-1.43 2.505-2.91 4.991a.6.6 0 0 1-.4.3c-1.588.02-3.177.01-4.857.01.328-.563.615-1.076.922-1.578q5.9-9.777 11.826-19.553c.41-.666.8-1.353 1.24-2a.752.752 0 0 1 .513-.287c1.414-.02 2.838-.01 4.253-.02a.607.607 0 0 1 .6.348q5.781 9.669 11.581 19.338a191.437 191.437 0 0 1 2.34 3.841zm-10.3-8.721a6858.083 6858.083 0 0 1-6.487-11.375c-2.173 3.812-4.315 7.573-6.487 11.375z" fill="#035882" /><path d="M64.587 60.34h-4.96V36.811h.6c3.095.01 6.179-.031 9.274.031a19.272 19.272 0 0 1 7.783 1.458 6.292 6.292 0 0 1 3.044 8.619 6.2 6.2 0 0 1-3.361 2.838 15.984 15.984 0 0 1-5.216 1.117c-2.214.113-4.438.123-6.651.185-.154 0-.3.01-.5.02-.013 3.082-.013 6.146-.013 9.261zm-.051-12.461c1.916 0 3.781.051 5.636-.021a8.986 8.986 0 0 0 3.567-.789 3.235 3.235 0 0 0 2.049-2.818 3.067 3.067 0 0 0-1.783-3.126 8.668 8.668 0 0 0-3.607-1c-1.8-.123-3.608-.143-5.411-.205-.144 0-.3.021-.441.031q-.015 4.039-.01 7.928z" fill="#025882" /><path d="M46.612 46.67v3.064H34.007v7.583h13.835v3.064H29.078V36.842H47.8V39.9H33.966v6.77z" fill="#015882" /><path d="M.465 59.746q.184-1.538.369-3.105c.974.287 1.906.635 2.859.82a14.652 14.652 0 0 0 8.107-.338 5.11 5.11 0 0 0 1.783-1.138 2.692 2.692 0 0 0-.482-4.243 14.567 14.567 0 0 0-3.935-1.793c-1.886-.676-3.792-1.322-5.626-2.1A5.726 5.726 0 0 1 .465 45.04a5.237 5.237 0 0 1 2.009-6.548 11.614 11.614 0 0 1 5.564-1.845 28.772 28.772 0 0 1 9.767.564c-.2 1.106-.41 2.213-.615 3.33-.9-.235-1.752-.512-2.634-.666a16.007 16.007 0 0 0-6.692-.061 4.041 4.041 0 0 0-2.183 1.24 2.119 2.119 0 0 0 .041 2.961 7.762 7.762 0 0 0 3.259 1.835c1.917.707 3.864 1.3 5.739 2.09a12.222 12.222 0 0 1 2.952 1.794c2.633 2.152 2.018 6.22.123 8.1a9.008 9.008 0 0 1-4.633 2.336A27.853 27.853 0 0 1 .793 59.9a2.284 2.284 0 0 1-.246-.072.567.567 0 0 0-.082-.082z" fill="#035882" /><path d="M116.381 13.456V8.8a25.066 25.066 0 0 1 16.14 6.559 25.4 25.4 0 0 1 8.137 17.309h-4.765c-.225-1.046-.4-2.1-.676-3.126a22.485 22.485 0 0 0-5.924-10.689 17.081 17.081 0 0 0-7.706-4.345c-1.671-.448-3.413-.694-5.206-1.052z" fill="#72ae52" /><path d="M114.341 27.987c0 1.507.011 3.044-.02 4.581 0 .134-.2.318-.349.379a9.79 9.79 0 0 1-8.239-.512 29.679 29.679 0 0 0-4.12-1.64 7.378 7.378 0 0 0-5.534.707 29.958 29.958 0 0 1-3.822 1.661 10.224 10.224 0 0 1-5.893-.154c-.113-.031-.276-.185-.276-.287-.021-1.629-.011-3.269-.011-4.888.882.174 1.65.348 2.439.481a8.9 8.9 0 0 0 5.4-.942 16.823 16.823 0 0 1 4.571-1.548 10.185 10.185 0 0 1 7.122 1.343 8.55 8.55 0 0 0 5.288 1.414c1.139-.092 2.266-.382 3.444-.595zM86.077 8.752c1.292.184 2.48.41 3.679.492a8.6 8.6 0 0 0 3.8-.83A34.1 34.1 0 0 1 97.8 6.835a9.806 9.806 0 0 1 7.819 1.158 9.308 9.308 0 0 0 8.27.861c.123-.041.257-.071.421-.112.01.153.03.287.03.42 0 1.353-.02 2.695.011 4.048.01.389-.144.5-.482.625a9.946 9.946 0 0 1-8.383-.687 30.12 30.12 0 0 0-3.2-1.342 7.294 7.294 0 0 0-5.8.389c-1.066.523-2.121 1.086-3.228 1.527a10.528 10.528 0 0 1-6.917.113.471.471 0 0 1-.267-.338c-.007-1.609.003-3.208.003-4.745zM114.321 18.405c.01.123.02.257.02.39 0 1.353-.01 2.695.011 4.048a.514.514 0 0 1-.431.615 9.578 9.578 0 0 1-4.109.635 17.416 17.416 0 0 1-3.177-.881c-1.261-.461-2.46-1.076-3.71-1.578a7.758 7.758 0 0 0-6.661.358 27.254 27.254 0 0 1-3.679 1.63 8.492 8.492 0 0 1-6.18-.379.612.612 0 0 1-.328-.421c-.02-1.5-.01-2.992-.01-4.529.84.184 1.588.369 2.347.5a9.179 9.179 0 0 0 5.657-.912 15.636 15.636 0 0 1 4.775-1.568 10.228 10.228 0 0 1 7.01 1.424 8.952 8.952 0 0 0 7.891.8c.143-.052.287-.1.441-.144.03-.008.071.012.133.012z" fill="#025882" /><path d="M130.656 32.671h-4.9a9.992 9.992 0 0 0-2.88-6.559 8.375 8.375 0 0 0-6.477-2.849v-4.817c7.186-.133 13.642 5.903 14.257 14.225z" fill="#72ae53" /><path d="M95.68 78.2H94.5c-.01-.185-.02-.369-.02-.543v-3.738a2.312 2.312 0 0 0-.041-.707c-.1-.266-.246-.615-.472-.7a1.125 1.125 0 0 0-.881.144 2.323 2.323 0 0 0-.881 1.783c-.093 1-.072 2.008-.1 3.013-.01.235 0 .471 0 .748h-1.18a7.656 7.656 0 0 1-.021-.5c-.01-1.415-.01-2.839-.031-4.253-.01-.42-.061-.851-.543-.994a1.009 1.009 0 0 0-1.137.492 4.156 4.156 0 0 0-.666 2.377c-.021.953-.011 1.906-.011 2.88h-1.2v-6.671h1.158v.994a2.722 2.722 0 0 1 1.9-1.158 1.69 1.69 0 0 1 1.712 1.261 7.877 7.877 0 0 1 .789-.851 1.744 1.744 0 0 1 1.875-.276 1.455 1.455 0 0 1 .922 1.424c.028 1.732.008 3.475.008 5.275z" fill="#74af57" /><path d="M83.72 91.515c2.88 1.107 3.792.564 3.649-2.019a5.7 5.7 0 0 1-1.118.615 2.031 2.031 0 0 1-2.428-1.045 5.113 5.113 0 0 1-.154-4.407 2.114 2.114 0 0 1 3.669-.471c.031-.246.051-.451.082-.687h1.158c.01.174.031.338.031.5 0 2.029.01 4.069-.011 6.1a4.656 4.656 0 0 1-.194 1.353 2.348 2.348 0 0 1-2.304 1.629 14.5 14.5 0 0 1-1.988-.113.4.4 0 0 1-.41-.471c.028-.318.018-.625.018-.984zm3.823-4.776a11.867 11.867 0 0 0-.707-2.029.974.974 0 0 0-1.794.062 4.4 4.4 0 0 0 0 3.9.982.982 0 0 0 1.824.052 13.656 13.656 0 0 0 .677-1.985z" fill="#74ae56" /><path d="M82.88 90.121c-.082.031-.092.041-.113.041-1.209.113-1.209.113-1.588-1.025a27.292 27.292 0 0 1-.492-1.557.433.433 0 0 0-.5-.369c-.851.02-1.712.02-2.562 0a.434.434 0 0 0-.5.369c-.2.686-.461 1.352-.645 2.049-.113.451-.338.625-.789.554a4.176 4.176 0 0 0-.625 0c.061-.226.092-.41.143-.574.974-2.89 1.957-5.78 2.921-8.67.1-.307.225-.482.563-.42a1.1 1.1 0 0 0 .257 0c.553-.1.778.143.953.666.943 2.88 1.916 5.749 2.89 8.619.025.102.046.196.087.317zm-2.654-3.914l-1.281-4.018c-.031 0-.062-.01-.1-.01-.43 1.332-.861 2.665-1.3 4.038.897-.01 1.748-.01 2.681-.01z" fill="#75af57" /><path d="M17.292 80.437c1.3.092 2.532.1 3.731.3a2.31 2.31 0 0 1 1.906 2.634 2.334 2.334 0 0 1-2.091 2.439 11.523 11.523 0 0 1-1.783.123c-.338 0-.441.1-.441.44.021 1.24.011 2.491.011 3.721-.082.041-.123.071-.164.071-1.169.082-1.169.082-1.169-1.076v-8.652zm1.333.994c0 1.178-.011 2.2.01 3.228a.418.418 0 0 0 .287.3 9.388 9.388 0 0 0 1.517-.143 1.329 1.329 0 0 0 1.045-1.394c.041-.974-.215-1.527-.943-1.722a13.292 13.292 0 0 0-1.916-.269z" fill="#74af56" /><path d="M.445 76.707c.615.194 1.147.409 1.711.532a4.044 4.044 0 0 0 1.168.062 1.382 1.382 0 0 0 1.333-1.015 1.5 1.5 0 0 0-.626-1.752c-.686-.441-1.414-.82-2.121-1.22A2.579 2.579 0 0 1 .342 70.9 2.308 2.308 0 0 1 2.1 68.6a7.158 7.158 0 0 1 3.2.021.384.384 0 0 1 .246.256c.031.349.01.7.01 1a23.733 23.733 0 0 0-2.396-.447 1.3 1.3 0 0 0-.8 2.45c.717.461 1.486.83 2.224 1.271a2.669 2.669 0 0 1 1.558 2.8 2.46 2.46 0 0 1-2.152 2.265 20.916 20.916 0 0 1-3.09-.023c-.339-.011-.513-.185-.451-.564a6.919 6.919 0 0 0-.004-.922z" fill="#74ae56" /><path d="M47.36 68.611h4.745a4.2 4.2 0 0 0 0 .5c.041.358-.1.471-.461.461-.953-.021-1.906-.01-2.9-.01v3.105h3.146v1.014c-.912 0-1.794.021-2.675-.01-.4-.01-.533.1-.523.513.031.983.011 1.967.011 3H52.2v.984h-4.84z" fill="#76b058" /><path d="M36.671 68.611h1.169v4.16c.164-.2.235-.287.307-.379a2.254 2.254 0 0 1 1.527-1.014 1.6 1.6 0 0 1 2 1.537c.1 1.742.03 3.5.03 5.288h-1.189v-4.345c0-.123.01-.246 0-.359-.072-.41-.072-.881-.585-1.045a1.112 1.112 0 0 0-1.229.42 3.446 3.446 0 0 0-.841 2.306c-.01.983 0 1.977 0 3h-1.178q-.017-4.732-.011-9.569z" fill="#73ae56" /><path d="M65.407 83.481h1.148v1.045a.582.582 0 0 0 .112.051c.113-.133.226-.256.339-.389a2.262 2.262 0 0 1 2.275-.82A1.556 1.556 0 0 1 70.47 84.8c.061.594.041 1.188.051 1.783.01 1.045-.01 2.08.01 3.125.01.39-.123.533-.492.482a1.575 1.575 0 0 0-.307 0c-.349.041-.482-.092-.472-.461.021-1.281.011-2.562.011-3.843v-.461c-.021-.39-.011-.83-.451-1a1.136 1.136 0 0 0-1.22.3 3.359 3.359 0 0 0-.953 2.51c-.02.8-.02 1.609.01 2.409.021.43-.112.594-.543.543a5.07 5.07 0 0 0-.687 0c-.02-2.269-.02-4.472-.02-6.706z" fill="#76b058" /><path d="M104.759 78.2h-1.219v-6.669h1.137c.021.339.031.677.052 1.025.051.051.1.092.153.144.041-.1.052-.246.123-.308a4.1 4.1 0 0 1 .923-.779c1.189-.563 2.6-.2 2.674 1.4.082 1.712.021 3.433.021 5.186h-1.24v-.666c0-1.333.01-2.665 0-4 0-.41.01-.861-.451-1.045a1.122 1.122 0 0 0-1.291.358 3.4 3.4 0 0 0-.882 2.388c-.02.8 0 1.6 0 2.408z" fill="#77b059" /><path d="M96.428 83.481h1.189v1.178a4.066 4.066 0 0 1 .481-.512 4.634 4.634 0 0 1 1.179-.748 1.675 1.675 0 0 1 2.285 1.66c.041 1.588.01 3.177.021 4.765 0 .267-.093.379-.359.369a4.39 4.39 0 0 0-.513 0c-.327.031-.4-.123-.4-.43q.015-2.076 0-4.151c0-.471.031-.994-.533-1.209a1.347 1.347 0 0 0-1.414.6 3.724 3.724 0 0 0-.687 2.306v2.87c-.348 0-.687.02-1.014-.011a.335.335 0 0 1-.226-.256c-.009-2.127-.009-4.259-.009-6.431z" fill="#73ae56" /><path d="M81.558 78.2h-1.2v-6.679h1.148v1.25a4.117 4.117 0 0 1 .317-.4 4.435 4.435 0 0 1 1.169-.871 1.661 1.661 0 0 1 2.449 1.609c.082 1.68.02 3.371.02 5.083h-1.24V77c0-1.2.011-2.388-.01-3.587-.01-.369-.031-.851-.461-.922a1.583 1.583 0 0 0-1.127.225A2.951 2.951 0 0 0 81.6 75.18c-.021.84-.01 1.67-.01 2.51-.001.164-.022.328-.032.51z" fill="#76b058" /><path d="M30.471 90.326c-1.68 0-2.644-.891-2.808-2.716a8.108 8.108 0 0 1 .185-2.326 2.337 2.337 0 0 1 2.162-1.937c1.517-.133 2.491.318 3.013 1.476a5.005 5.005 0 0 1 .092 3.884 2.51 2.51 0 0 1-2.644 1.619zm1.691-3.392c-.143-.666-.235-1.342-.43-1.988a1.208 1.208 0 0 0-1.25-.871 1.191 1.191 0 0 0-1.21.851 5.707 5.707 0 0 0-.041 3.761 1.211 1.211 0 0 0 1.24.891 1.249 1.249 0 0 0 1.281-.84c.175-.574.277-1.179.41-1.804zM58.182 86.657a11.52 11.52 0 0 1 .461-1.895 2.4 2.4 0 0 1 2.429-1.456 2.538 2.538 0 0 1 2.583 1.558 5.207 5.207 0 0 1 .1 3.751c-.41 1.23-1.435 1.793-2.972 1.711a2.447 2.447 0 0 1-2.388-2 16.8 16.8 0 0 1-.213-1.669zm1.332.2a15.2 15.2 0 0 0 .287 1.712 1.242 1.242 0 0 0 1.312.994 1.344 1.344 0 0 0 1.332-.994 5.675 5.675 0 0 0-.041-3.526 1.292 1.292 0 0 0-1.342-.973 1.248 1.248 0 0 0-1.24 1.025 16.312 16.312 0 0 0-.308 1.767zM12.486 74.831c.113-.543.185-1.168.369-1.762a2.352 2.352 0 0 1 2.255-1.7 2.594 2.594 0 0 1 2.828 1.486A5 5 0 0 1 18 76.84c-.482 1.168-1.507 1.639-3.065 1.506a2.381 2.381 0 0 1-2.193-1.906c-.123-.492-.164-1.004-.256-1.609zm4.581 0a15.436 15.436 0 0 0-.41-1.831 1.261 1.261 0 0 0-1.291-.892 1.319 1.319 0 0 0-1.24 1.046 6.2 6.2 0 0 0-.041 3.381 1.31 1.31 0 0 0 1.315 1.084 1.358 1.358 0 0 0 1.393-1.066c.131-.523.172-1.066.274-1.722zM79.057 75.016a11.288 11.288 0 0 1-.451 1.885c-.461 1.128-1.516 1.589-3.033 1.445a2.436 2.436 0 0 1-2.224-1.937 6.085 6.085 0 0 1 .021-3.033 2.523 2.523 0 0 1 2.51-2.009 2.592 2.592 0 0 1 2.87 1.933 15.108 15.108 0 0 1 .307 1.716zm-1.342-.185a18.148 18.148 0 0 0-.441-1.875 1.246 1.246 0 0 0-1.312-.851 1.323 1.323 0 0 0-1.2 1.025 6.614 6.614 0 0 0-.062 3.37 1.334 1.334 0 0 0 1.281 1.117 1.369 1.369 0 0 0 1.435-1.066 16.375 16.375 0 0 0 .299-1.72z" fill="#74ae56" /><path d="M54.616 71.521c.02.369.031.7.051 1.056.307-.277.553-.554.84-.769a1.974 1.974 0 0 1 2.163-.256 1.754 1.754 0 0 1 .881 1.773c-.01 1.434 0 2.869 0 4.3v.575h-1.219v-1.985c0-.871.01-1.742 0-2.614-.011-.461-.021-.942-.554-1.147a1.3 1.3 0 0 0-1.353.512 3.528 3.528 0 0 0-.748 2.132c-.03 1.024-.01 2.039-.01 3.095h-1.189v-6.662c.359-.01.728-.01 1.138-.01z" fill="#74af56" /><path d="M109.72 92.755c.266-.769.543-1.506.768-2.255a1.229 1.229 0 0 0-.02-.768c-.738-1.906-1.5-3.812-2.245-5.708-.061-.154-.1-.318-.184-.564a6.965 6.965 0 0 1 1.148.021c.143.02.287.245.358.409.513 1.281 1 2.573 1.507 3.864.051.143.123.277.235.543.216-.605.4-1.086.564-1.568.318-.912.666-1.824.943-2.757.133-.43.338-.584.758-.522a5.04 5.04 0 0 0 .687 0c-.318.871-.605 1.68-.9 2.49q-1.075 2.982-2.162 5.964c-.351.943-.361.943-1.457.851z" fill="#74ae56" /><path d="M116.391 28.059a4.649 4.649 0 0 1 4.858 4.765h-4.868c.01-1.619.01-3.176.01-4.765z" fill="#73ae54" /><path d="M95.1 86.155h-3.755a3.636 3.636 0 0 0 .912 2.736c.768.779 1.752.585 2.685.39.143.728.133.779-.513.912a3.46 3.46 0 0 1-3.658-.933 3.941 3.941 0 0 1-.779-3.094 4.884 4.884 0 0 1 .5-1.743 2.6 2.6 0 0 1 3.116-.994 2.358 2.358 0 0 1 1.492 2.726zm-1.292-.85c.011-.82-.389-1.23-1.147-1.23a1.161 1.161 0 0 0-1.23 1.23zM43.968 86.166h-3.73a3.563 3.563 0 0 0 .9 2.725c.768.779 1.752.585 2.685.39.174.717.164.769-.492.912a3.468 3.468 0 0 1-3.731-.974 3.821 3.821 0 0 1-.737-2.7 5.305 5.305 0 0 1 .338-1.742 2.6 2.6 0 0 1 3.166-1.384 2.391 2.391 0 0 1 1.601 2.773zm-1.281-.872c-.01-.778-.369-1.178-1-1.219a1.221 1.221 0 0 0-1.4 1.219z" fill="#75ae57" /><path d="M102.167 74.186h-3.741a3.619 3.619 0 0 0 .9 2.736A2.5 2.5 0 0 0 102 77.3c.194.738.153.81-.554.943a3.85 3.85 0 0 1-3.136-.492 3.421 3.421 0 0 1-1.25-2.89 3.7 3.7 0 0 1 .769-2.736 2.87 2.87 0 0 1 3.084-.574 2.451 2.451 0 0 1 1.254 2.635zm-3.7-.81h2.419c.01-.8-.369-1.24-1.076-1.281a1.266 1.266 0 0 0-1.343 1.281z" fill="#74ae56" /><path d="M62.609 76.409c.492-1.434.943-2.736 1.394-4.027.348-1 .348-1 1.506-.84a146.33 146.33 0 0 0-.563 1.578c-.564 1.588-1.127 3.177-1.712 4.755-.051.143-.266.338-.4.328-.308-.021-.7.225-.9-.215-.082-.175-.144-.349-.215-.523-.779-1.957-1.558-3.925-2.368-5.975a9.34 9.34 0 0 1 1.21.021c.112.01.235.215.287.359.512 1.3 1.014 2.6 1.516 3.9.061.168.136.342.245.639z" fill="#75af57" /><path d="M35.2 72.679c-.615-.143-1.2-.307-1.794-.4a.775.775 0 0 0-.912.5c-.153.461.2.707.5.9.472.308.984.533 1.476.82a1.994 1.994 0 0 1 1.13 2.341 2.052 2.052 0 0 1-2.029 1.5c-.553.021-1.117-.051-1.68-.082-.5-.031-.748-.246-.666-.779a4.763 4.763 0 0 0 0-.656 7.018 7.018 0 0 0 1.024.461 5.547 5.547 0 0 0 1.3.144.86.86 0 0 0 .41-1.609c-.574-.359-1.179-.687-1.763-1.045a1.69 1.69 0 0 1-.912-1.22 1.76 1.76 0 0 1 1.739-2.154 3.7 3.7 0 0 1 1.117.021c1.23.203 1.117-.084 1.06 1.258zM49.738 89.3v.728a3.683 3.683 0 0 1-4.11-.717 4.661 4.661 0 0 1-.092-5.1 2.7 2.7 0 0 1 2.89-.8 1.95 1.95 0 0 1 1.506 1.855c.011.112 0 .235 0 .4h-1.373a6.452 6.452 0 0 0-.041-.645.932.932 0 0 0-.656-.882c-.471-.123-.963-.071-1.168.38a6.683 6.683 0 0 0-.5 1.783 3.055 3.055 0 0 0 .133 1.209 2.26 2.26 0 0 0 3.073 1.821c.112-.02.215-.02.338-.032zM107.834 89.271v.748a3.264 3.264 0 0 1-4.878-2.849 6.689 6.689 0 0 1 .3-2.306c.646-1.886 3.156-1.834 4.079-1.015.092.082.205.164.235.267.154.492.277.994.421 1.486-.421.051-.851.1-1.3.154-.041-.318-.072-.544-.1-.779a.882.882 0 0 0-.738-.861 1.068 1.068 0 0 0-1.158.471 3.634 3.634 0 0 0-.359 2.573 4.176 4.176 0 0 0 .492 1.332 2.136 2.136 0 0 0 2.408.922c.178-.051.364-.092.598-.143zM11.748 77.321c.113.81.123.872-.615.943a7.714 7.714 0 0 1-2.121-.051 2.335 2.335 0 0 1-1.824-1.629 4.847 4.847 0 0 1 .184-4.059 2.624 2.624 0 0 1 2.767-1.125 1.982 1.982 0 0 1 1.773 1.66 5.63 5.63 0 0 1 .051.677h-1.332c-.041-.267-.072-.513-.112-.759a.916.916 0 0 0-.779-.84 1.032 1.032 0 0 0-1.076.441 3.875 3.875 0 0 0 .614 4.521 2.2 2.2 0 0 0 1.743.389c.235-.055.461-.116.727-.168z" fill="#75ae57" /><path d="M21.484 72.32c0 1.558-.021 3 .01 4.448.01.512.431.769 1.045.738a4.537 4.537 0 0 0 .544-.082c.246.8.153.933-.615.922a5.083 5.083 0 0 1-1.117-.092 1.276 1.276 0 0 1-1.107-1.383c-.021-1.3-.01-2.593-.01-3.895v-.594L19.1 72.32v-.809c.349-.021.707-.031 1.158-.051-.174-1-.02-1.845 1.2-2.081v2.081H23.2v.86z" fill="#74af56" /><path d="M110.96 72.341h-1.118v-.83c.359-.021.708-.031 1.138-.051-.2-1.035.031-1.835 1.209-2.081v2.111h1.7c.185.841.164.871-.614.871-1.1-.01-1.1-.01-1.1 1.066v2.511c0 1.476.215 1.67 1.691 1.517v.861a3.677 3.677 0 0 1-2.224-.2 1.543 1.543 0 0 1-.707-1.537c-.01-1.189 0-2.388 0-3.577a6.533 6.533 0 0 0 .025-.661z" fill="#75ae57" /><path d="M24.774 72.361h-1.107v-.871h1.117c-.144-1.014-.031-1.885 1.2-2.121v2.1h1.732c.01.287.02.533.041.85h-1.764v3.946c0 1.055.389 1.373 1.445 1.189.082-.011.164-.011.277-.021v.974a12.264 12.264 0 0 1-2.07-.236 1.307 1.307 0 0 1-.871-1.424v-4.386z" fill="#74af56" /><path d="M34.181 84.3v-.819h1.107c-.123-1.025-.031-1.917 1.23-2.153v2.112h1.721v.85c-.44 0-.881.01-1.322 0-.266-.01-.409.062-.409.369.01 1.3 0 2.593.02 3.894.01.584.266.83.84.882.267.02.544 0 .81 0 .205.789.133.881-.666.891-.2 0-.41 0-.615-.01a1.521 1.521 0 0 1-1.619-1.7c-.01-1.209-.031-2.429.01-3.638.01-.513-.1-.779-.666-.687a1.965 1.965 0 0 1-.441.009z" fill="#75ae57" /><path d="M52.751 81.328v2.112h1.7v.84H52.74v4.1c.011.789.308 1.086 1.1 1.066a5.143 5.143 0 0 0 .553-.041c.2.82.144.912-.656.922a5.289 5.289 0 0 1-.563-.01 1.549 1.549 0 0 1-1.66-1.773c0-1.209-.021-2.429.01-3.638.01-.492-.133-.687-.625-.615a3.823 3.823 0 0 1-.492 0v-.809c.348-.021.7-.031 1.127-.052-.187-1.015-.044-1.856 1.217-2.102z" fill="#73ac56" /><path d="M69.516 71.511h1.138c.02.328.031.656.051 1.107.605-.667 1.128-1.292 2.07-1.23V72.7c-.02.01-.051.051-.082.051-1.711-.01-1.957 1.076-2.008 2.48-.031.82 0 1.64-.011 2.459 0 .164-.01.328-.02.523h-1.138z" fill="#77b059" /><path d="M25.163 83.5v1.107a2.488 2.488 0 0 1 2.05-1.291v1.332c-1.691.277-2.06.717-2.071 2.439 0 .973-.01 1.947-.01 2.91a.448.448 0 0 1-.051.134h-1.148v-6.64c.42.009.81.009 1.23.009zM139.777 9.582c-.625 1.64-1.209 3.167-1.8 4.735-1.086-1.036-2.131-2.019-3.259-3.085 1.687-.554 3.317-1.086 5.059-1.65zM132.388 9.49c-1.322-.82-2.552-1.589-3.863-2.409 1.424-.84 2.767-1.639 4.2-2.49-.111 1.66-.225 3.228-.337 4.899z" fill="#73ae56" /><path d="M114.075 4.325c.789-1.445 1.547-2.825 2.367-4.325.728 1.476 1.4 2.869 2.122 4.325z" fill="#74ae56" /><path d="M144.307 27.711c-.359-1.445-.677-2.778-1.035-4.212 1.588.317 3.094.615 4.724.943-1.25 1.106-2.419 2.152-3.689 3.269zM124.846.922l.686 4.807c-1.363-.349-2.654-.666-4.038-1.015 1.118-1.26 2.183-2.48 3.352-3.792z" fill="#73ae56" /><path d="M141.939 20.506c-.717-1.209-1.4-2.357-2.141-3.617 1.649-.092 3.207-.174 4.9-.256-.955 1.342-1.836 2.592-2.759 3.873z" fill="#74ae56" /><path d="M149.1 33.019c-1.517.687-2.88 1.3-4.325 1.947v-4.15c1.425.717 2.811 1.424 4.325 2.203z" fill="#73ae54" /><path d="M30.051 78.2h-1.168v-6.679h1.168z" fill="#72ae52" /><path d="M67.58 78.2h-1.169v-6.679h1.169z" fill="#74af56" /><path d="M55.641 83.481h1.178v.619c0 1.814-.02 3.618.01 5.432.011.5-.1.748-.645.656a3.166 3.166 0 0 0-.543 0z" fill="#75ae57" /><path d="M55.548 80.55c.123-.011.2-.031.287-.031 1.24.031 1.046-.277 1.066 1.107 0 .266-.1.369-.359.358-.317-.01-.635 0-.994 0zM66.329 68.611h1.312v1.373h-1.312z" fill="#77b059" /><path d="M30.113 70h-1.292v-1.389h1.292z" fill="#74af56" /></g></svg>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

Footer.propTypes = {
  href: PropTypes.string,
};

Footer.defaultProps = {
  href: '',
};
