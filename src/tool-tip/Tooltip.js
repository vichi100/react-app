import React from "react";
import "./tooltip.css";

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }
  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    let message = this.props.message;
    let position = this.props.position;
    //onMouseLeave={this.hideTooltip}
    return (
      <div className="tooltip" onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <div className="tooltip-trigger" onMouseOver={this.showTooltip}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
