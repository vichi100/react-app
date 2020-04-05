import classNames from "classnames";
import isEqual from "lodash/isEqual";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import React from "react";

import Button from "./Button";
import constants from "./constants";
import NodeModel from "./NodeModel";
import TreeNode from "./TreeNode";

class CheckboxTree extends React.Component {
  static propTypes = {
    // nodes: PropTypes.arrayOf(nodeShape).isRequired,

    checkModel: PropTypes.oneOf([
      constants.CheckModel.LEAF,
      constants.CheckModel.ALL
    ]),
    // disabled: PropTypes.bool,
    expandOnClick: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    nativeCheckboxes: PropTypes.bool,
    onCheck: PropTypes.func,
    onClick: PropTypes.func,
    onExpand: PropTypes.func
  };

  static defaultProps = {
    checkModel: constants.CheckModel.LEAF,
    checked: [],
    // disabled: false,
    expandDisabled: false,
    expandOnClick: false,
    expanded: [],
    icons: {
      expandClose: <span className="rct-icon rct-icon-expand-close" />,
      expandOpen: <span className="rct-icon rct-icon-expand-open" />
    },

    id: null,

    name: undefined,
    nameAsArray: false,
    nativeCheckboxes: false,
    onCheck: () => {},
    onClick: null,
    onExpand: () => {}
  };

  constructor(props) {
    super(props);

    const model = new NodeModel(props);
    model.flattenNodes(props.nodes);
    model.deserializeLists({
      checked: props.checked,
      expanded: props.expanded
    });

    this.state = {
      id: props.id || `rct-${nanoid(7)}`,
      model,
      prevProps: props
    };
    // this.getDerivedStateFromProps
  }

  // eslint-disable-next-line react/sort-comp
  static getDerivedStateFromProps = (newProps, prevState) => {
    const { model, prevProps } = prevState;
    const { disabled, id, nodes } = newProps;
    let newState = { ...prevState, prevProps: newProps };

    // Apply new properties to model
    model.setProps(newProps);

    // Since flattening nodes is an expensive task, only update when there is a node change
    if (!isEqual(prevProps.nodes, nodes) || prevProps.disabled !== disabled) {
      model.flattenNodes(nodes);
    }

    if (id !== null) {
      newState = { ...newState, id };
    }

    model.deserializeLists({
      checked: newProps.checked,
      expanded: newProps.expanded
    });

    return newState;
  };

  onCheck = nodeInfo => {
    const { checkModel, onCheck } = this.props;
    const model = this.state.model.clone();
    const node = model.getNode(nodeInfo.value);

    model.toggleChecked(nodeInfo, nodeInfo.checked, checkModel);
    onCheck(model.serializeList("checked"), { ...node, ...nodeInfo });
  };

  onExpand = nodeInfo => {
    const { onExpand } = this.props;
    const model = this.state.model.clone();
    const node = model.getNode(nodeInfo.value);

    model.toggleNode(nodeInfo.value, "expanded", nodeInfo.expanded);
    onExpand(model.serializeList("expanded"), { ...node, ...nodeInfo });
  };

  determineShallowCheckState = node => {
    const flatNode = this.state.model.getNode(node.value);

    if (flatNode.isLeaf) {
      return flatNode.checked ? 1 : 0;
    }

    if (this.isEveryChildChecked(node)) {
      return 1;
    }

    if (this.isSomeChildChecked(node)) {
      return 2;
    }

    return 0;
  };

  isEveryChildChecked = node => {
    return node.children.every(
      child => this.state.model.getNode(child.value).checkState === 1
    );
  };

  isSomeChildChecked = node => {
    return node.children.some(
      child => this.state.model.getNode(child.value).checkState > 0
    );
  };

  renderTreeNodes = (nodes, parent = {}) => {
    const { expandOnClick, icons, lang } = this.props;
    const { id, model } = this.state;
    const { icons: defaultIcons } = CheckboxTree.defaultProps;

    const treeNodes = nodes.map(node => {
      const key = node.value;
      const flatNode = model.getNode(node.value);
      const children = flatNode.isParent
        ? this.renderTreeNodes(node.children, node)
        : null;

      // Determine the check state after all children check states have been determined
      // This is done during rendering as to avoid an additional loop during the
      // deserialization of the `checked` property
      flatNode.checkState = this.determineShallowCheckState(node);

      return (
        <TreeNode
          key={key}
          checked={flatNode.checkState}
          className={node.className}
          disabled={flatNode.disabled}
          expandOnClick={expandOnClick}
          expanded={flatNode.expanded}
          icons={{ ...defaultIcons, ...icons }}
          label={node.label}
          lang={lang}
          isLeaf={flatNode.isLeaf}
          isParent={flatNode.isParent}
          treeId={id}
          value={node.value}
          onCheck={this.onCheck}
          onExpand={this.onExpand}
        >
          {children}
        </TreeNode>
      );
    });

    return <ol>{treeNodes}</ol>;
  };

  render() {
    const { disabled, iconsClass, nodes, nativeCheckboxes } = this.props;
    const { id } = this.state;
    const treeNodes = this.renderTreeNodes(nodes);

    const className = classNames({
      "react-checkbox-tree": true,
      "rct-disabled": disabled,
      [`rct-icons-${iconsClass}`]: true,
      "rct-native-display": nativeCheckboxes
    });

    return (
      <div className={className} id={id}>
        {treeNodes}
      </div>
    );
  }
}

export default CheckboxTree;
