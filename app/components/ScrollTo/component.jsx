import React from 'react';
import PropTypes from 'prop-types';

const offset = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

export default class ScrollTo extends React.Component {
  constructor(props) {
    super(props);
    this.panel = React.createRef();
  }

  componentDidMount() {
    window.scrollTo({
      top: offset(this.panel.current).top - 10,
      behavior: 'smooth',
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.panel}>
        {children}
      </div>
    );
  }
}

ScrollTo.propTypes = {
  children: PropTypes.element.isRequired,
};
