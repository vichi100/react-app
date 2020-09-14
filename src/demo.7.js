import React from "react";
import CheckboxTree from "./tree/CheckboxTree";
import "./less/react-checkbox-tree.css";
import Accordion from "./accordion/Accordion";
import AccordionItem from "./accordion/AccordionItem";
import CheckBoxList from "./checkbox/CheckBoxList";
import "../src/accordion/index.css";
// import ReactRadioGroup from "react-simple-radio-button";
import ReactRadioGroup from "./radio-button/ReactSimpleRadioButton";
import Card from "./card/Card";
import Title from "./card/Title";

import "../src/card/card.css";

import Modal from "./modal/Modal";

const nodes = [
  {
    label: "big data",
    value: "big data",
    children: [
      { label: "big data v ", value: "true x" },
      { label: "big data b", value: "y" },
      { label: "big data c", value: "c" },
      { label: "big data d", value: "b" },
      { label: "big data e", value: "d" },
      { label: "big data f", value: "s" }
    ]
  }
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadMore: false,
      isShowing: false,
      activeClickedItems: [0],
      activeHoveredItems: [0],
      isAllSelected: false,
      subTitile: "",
      checked: [
        "/app/Http/Controllers/WelcomeController.js",
        "/app/Http/routes.js",
        "/public/assets/style.css",
        "/public/index.html",
        "/.gitignore"
      ],
      expanded: ["/app"],
      filterText: "",
      nodesFiltered: nodes,
      nodes
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  onClickButton = event => {
    console.log("key: ", event.target.value);
    let value = event.target.value;
    // if (value.toLowerCase() === "all") {
    //   value = "All +";
    //   this.setState({ subTitile: value });
    // } else {
    //   value = value + " - ";
    //   this.setState({ subTitile: value });
    // }
    this.setState({ subTitle: value });
  };

  toggleActive = index => {
    const position = this.state.activeClickedItems.indexOf(index);

    if (position !== -1) {
      this.setState({ activeClickedItems: [] });
    } else {
      this.setState({ activeClickedItems: [index] });
    }
  };

  handleClick({ activeItems }) {
    this.setState({ activeClickedItems: activeItems });
  }

  onCheck = checked => {
    this.setState({ checked });
  };

  onExpand = expanded => {
    this.setState({ expanded });
  };

  onCheckBoxChange = (checkName, isChecked) => {
    console.log("key: ", isChecked);
    let isAllChecked = checkName === "all" && isChecked;
    let isAllUnChecked = checkName === "all" && !isChecked;
    const checked = isChecked;

    const checkList = this.state.checkList.map((city, index) => {
      if (isAllChecked || city.value === checkName) {
        return Object.assign({}, city, {
          checked
        });
      } else if (isAllUnChecked) {
        return Object.assign({}, city, {
          checked: false
        });
      }

      return city;
    });

    let isAllSelected =
      checkList.findIndex(item => item.checked === false) === -1 ||
      isAllChecked;

    this.setState({
      checkList,
      isAllSelected
    });
  };

  onFilterChange = e => {
    this.setState({ filterText: e.target.value }, this.filterTree);
  };

  filterTree = () => {
    // Reset nodes back to unfiltered state
    if (!this.state.filterText) {
      this.setState(prevState => ({
        nodesFiltered: prevState.nodes
      }));

      return;
    }

    const nodesFiltered = prevState => ({
      nodesFiltered: prevState.nodes.reduce(this.filterNodes, [])
    });

    this.setState(nodesFiltered);
  };

  filterNodes = (filtered, node) => {
    const { filterText } = this.state;
    const children = (node.children || []).reduce(this.filterNodes, []);

    if (
      // Node's label matches the search string
      node.label.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >
        -1 ||
      // Or a children has a matching node
      children.length
    ) {
      filtered.push({ ...node, children });
    }

    return filtered;
  };

  onOptionSelect = value => {
    console.log(value);
  };

  render() {
    const { checked, expanded, filterText, nodesFiltered } = this.state;

    return (
      <div className="filter-container">
        <Accordion atomic={true}>
          <AccordionItem title="Title x" subTitle={this.state.subTitle}>
            <div>
              <input
                className="filter-text"
                placeholder="Search..."
                type="text"
                value={filterText}
                onChange={this.onFilterChange}
              />
              <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nativeCheckboxes={true}
                nodes={nodesFiltered}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
              />
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById('demo'));
