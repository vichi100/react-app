import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class AccordionItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
  };

  static defaultProps = {
    title: "TITLE",
    subTitle: null
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  setSubTitle = () => {
    let subTitle = this.props.subTitle;
    if (this.state.isOpen) {
      subTitle = subTitle + "+";
    } else {
      subTitle = subTitle + "-";
    }
    return subTitle;
  };

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    // this.setSubTitle();
  };

  render() {
    const accordionItemClassNames = classNames([
      "accordion-item",
      {
        active: this.state.isOpen
      }
    ]);

    return (
      <div className={accordionItemClassNames}>
        <div className="header" onClick={this.onClick}>
          <div className="title">{this.props.title}</div>
          <div className="subtitle">
            {this.props.subTitle
              ? this.state.isOpen
                ? this.props.subTitle + "-"
                : this.props.subTitle + "+"
              : null}
          </div>
        </div>

        <div className="panel">{this.props.children}</div>
      </div>
      //   <div className={accordionItemClassNames}>
      //     <button onClick={this.onClick}>{this.props.title}</button>
      //     <div className="panel">{this.props.children}</div>
      //   </div>
    );
  }
}

export default AccordionItem;
