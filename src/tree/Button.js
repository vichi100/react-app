import PropTypes from "prop-types";
import React from "react";

class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <button type="button" {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
