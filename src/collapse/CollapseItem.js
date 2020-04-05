import cx from "classnames";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import uuid from "uuid";

import CollapseItemBody from "./CollapseItemBody";
import CollapseItemTitle from "./CollapseItemTitle";

export default class CollapseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: props.expanded ? "none" : 0,
      overflow: props.expanded ? "visible" : "hidden"
    };
  }

  componentDidMount() {
    this.setMaxHeight(false);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentDidUpdate(prevProps) {
    const { children, disabled, expanded } = this.props;

    if (prevProps.expanded !== expanded) {
      if (disabled) return;

      if (expanded) {
        this.handleExpand();
      } else {
        this.handleCollapse();
      }
    } else if (prevProps.children !== children) {
      this.setMaxHeight(false);
    }
  }

  handleExpand() {
    const { index, onExpand, slug } = this.props;

    this.setMaxHeight(false);

    if (onExpand) {
      slug ? onExpand(slug, index) : onExpand(index);
    }
  }

  handleCollapse() {
    const { index, onClose, slug } = this.props;

    this.setMaxHeight(true);

    if (onClose) {
      slug ? onClose(slug, index) : onClose(index);
    }
  }

  setMaxHeight(collapse) {
    const { duration, expanded } = this.props;

    clearTimeout(this.timeout);

    const bodyNode = ReactDOM.findDOMNode(this.refs.body);

    this.setState({
      maxHeight: expanded || collapse ? bodyNode.scrollHeight + "px" : 0,
      overflow: "hidden"
    });

    if (expanded) {
      this.timeout = setTimeout(() => {
        this.setState({
          maxHeight: "none",
          overflow: "visible"
        });
      }, duration);
    } else {
      this.timeout = setTimeout(() => {
        this.setState({
          maxHeight: 0
        });
      }, 0);
    }
  }

  getProps() {
    const {
      className,
      disabled,
      disabledClassName,
      expanded,
      expandedClassName,
      style
    } = this.props;

    const props = {
      className: cx(
        "react-sanfona-item",
        className,
        {
          "react-sanfona-item-expanded": expanded && !disabled,
          "react-sanfona-item-disabled": disabled
        },
        expandedClassName && {
          [expandedClassName]: expanded
        },
        disabledClassName && {
          [disabledClassName]: disabled
        }
      ),
      style
    };

    return props;
  }

  render() {
    const {
      bodyClassName,
      bodyTag,
      children,
      disabled,
      duration,
      easing,
      onClick,
      //   onMouseOver,
      rootTag: Root,
      title,
      subTitile,
      titleClassName,
      titleTag
    } = this.props;

    const { maxHeight, overflow } = this.state;

    return (
      <div {...this.getProps()} ref="item">
        <CollapseItemTitle
          className={titleClassName}
          expanded={this.props.expanded}
          onClick={disabled ? null : onClick}
          rootTag={titleTag}
          title={title}
          subTitile={subTitile}
          uuid={this.uuid}
        />
        <CollapseItemBody
          className={bodyClassName}
          duration={duration}
          easing={easing}
          expanded={this.props.expanded}
          maxHeight={maxHeight}
          overflow={overflow}
          ref="body"
          rootTag={bodyTag}
          uuid={this.uuid}
        >
          {children}
        </CollapseItemBody>
      </div>
    );
  }
}

CollapseItem.defaultProps = {
  rootTag: "div",
  titleTag: "h3",
  bodyTag: "div"
};

CollapseItem.propTypes = {
  bodyClassName: PropTypes.string,
  bodyTag: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  duration: PropTypes.number,
  easing: PropTypes.string,
  expanded: PropTypes.bool,
  expandedClassName: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
  //   onMouseOver: PropTypes.func,
  onClose: PropTypes.func,
  onExpand: PropTypes.func,
  onHover: PropTypes.func,
  rootTag: PropTypes.string,
  slug: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleClassName: PropTypes.string,
  titleTag: PropTypes.string,
  uuid: PropTypes.string
};
