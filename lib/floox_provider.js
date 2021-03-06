import React from 'react';

import Floox from './floox_class';


const FlooxProvider = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    floox: React.PropTypes.instanceOf(Floox).isRequired,
  },

  childContextTypes: {
    floox: React.PropTypes.instanceOf(Floox).isRequired,
  },

  getChildContext() {
    return {
      floox: this.props.floox,
    };
  },

  render() {
    return React.Children.only(this.props.children);
  },
});

export default FlooxProvider;
