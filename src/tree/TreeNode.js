import PropTypes from "prop-types";
import React from "react";

import Button from "./Button";
import NativeCheckbox from "./NativeCheckbox";

class TreeNode extends React.Component {
  static propTypes = {
    checked: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    isLeaf: PropTypes.bool.isRequired,
    isParent: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired,
    treeId: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onCheck: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,

    children: PropTypes.node,
    className: PropTypes.string,
    expandOnClick: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    children: null,
    className: null,
    expandOnClick: false,
    onClick: () => {}
  };

  onCheck = () => {
    const { value, onCheck } = this.props;

    onCheck({ value, checked: this.getCheckState({ toggle: true }) });
  };

  onClick = () => {
    const { value, onClick } = this.props;

    onClick({ value, checked: this.getCheckState({ toggle: false }) });
  };

  onExpand = () => {
    const { expanded, value, onExpand } = this.props;

    onExpand({ value, expanded: !expanded });
  };

  getCheckState({ toggle }) {
    const { checked, optimisticToggle } = this.props;

    // Toggle off state to checked
    if (checked === 0 && toggle) {
      return true;
    }

    // Node is already checked and we are not toggling
    if (checked === 1 && !toggle) {
      return true;
    }

    // Get/toggle partial state based on cascade model
    if (checked === 2) {
      return optimisticToggle;
    }

    return false;
  }

  renderCollapseButton() {
    const { expandDisabled, isLeaf } = this.props;

    if (isLeaf) {
      return <span className="rct-icon" />;
    }

    return (
      <Button
        className="rct-collapse rct-collapse-btn"
        disabled={expandDisabled}
        onClick={this.onExpand}
      >
        {this.renderCollapseIcon()}
      </Button>
    );
  }

  renderCollapseIcon() {
    const {
      expanded,
      icons: { expandClose, expandOpen }
    } = this.props;

    if (!expanded) {
      return expandClose;
    }

    return expandOpen;
  }

  renderCheckboxLabel(children) {
    const { checked, disabled, treeId, value, onClick } = this.props;
    const clickable = onClick !== null;
    const inputId = `${treeId}-${String(value)
      .split(" ")
      .join("_")}`;

    const render = [
      <label>
        <NativeCheckbox
          checked={checked === 1}
          disabled={disabled}
          id={inputId}
          indeterminate={checked === 2}
          onClick={this.onCheck}
          onChange={() => {}}
        />

        {this.renderCollapseButton()}
        {!clickable ? children : null}
      </label>
    ];

    if (clickable) {
      render.push(<span>{children}</span>);
    }

    return render;
  }

  renderLabel() {
    const { label } = this.props;
    const labelChildren = [<span>{label}</span>];

    return this.renderCheckboxLabel(labelChildren);
  }

  renderChildren() {
    if (!this.props.expanded) {
      return null;
    }

    return this.props.children;
  }

  render() {
    return (
      <li style={{ listStyleType: "none" }}>
        <span className="rct-text">{this.renderLabel()}</span>
        {this.renderChildren()}
      </li>
    );
  }
}

export default TreeNode;
