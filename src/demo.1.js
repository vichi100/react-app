import React from "react";
// import ReactDOM from 'react-dom';

// import { Accordion, AccordionItem } from 'react-sanfona';
import Collapse from "./collapse/Collapse";
import CollapseItem from "./collapse/CollapseItem";
import CheckBoxList from "../src/checkbox/CheckBoxList";

import "./demo.css";

export default class Demo extends React.Component {
  constructor(props) {
    super();

    this.state = {
      activeClickedItems: [0],
      activeHoveredItems: [0],
      isAllSelected: false,
      subTitile: "",
      checkList: [
        {
          name: "city",
          value: "bangalore",
          checked: false
        },
        {
          name: "city",
          value: "chennai",
          checked: false
        },
        {
          name: "city",
          value: "delhi",
          checked: false
        },
        {
          name: "city",
          value: "bangalore",
          checked: false
        },
        {
          name: "city",
          value: "chennai",
          checked: false
        },
        {
          name: "city",
          value: "delhi",
          checked: false
        },
        {
          name: "city",
          value: "bangalore",
          checked: false
        },
        {
          name: "city",
          value: "chennai",
          checked: false
        },
        {
          name: "city",
          value: "delhi",
          checked: false
        },
        {
          name: "city",
          value: "bangalore",
          checked: false
        },
        {
          name: "city",
          value: "chennai",
          checked: false
        },
        {
          name: "city",
          value: "delhi",
          checked: false
        }
      ]
    };

    this.toggleActive = this.toggleActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  toggleActive(index) {
    const position = this.state.activeClickedItems.indexOf(index);

    if (position !== -1) {
      this.setState({ activeClickedItems: [] });
    } else {
      this.setState({ activeClickedItems: [index] });
    }
  }

  handleClick({ activeItems }) {
    this.setState({ activeClickedItems: activeItems });
  }

  handleHover({ activeItems }) {
    this.setState({ activeHoveredItems: activeItems });
  }

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
    this.setState({ subTitile: value });
  };

  render() {
    return (
      <div className="demo-container">
        <Collapse>
          {[0, 1, 2, 3, 4].map(item => {
            return (
              <CollapseItem
                key={item}
                title={`Item ${item}`}
                subTitile={this.state.subTitile}
                // expanded={this.state.activeClickedItems.includes(item)}
              >
                <div>
                  <CheckBoxList
                    options={this.state.checkList}
                    onClickButton={this.onClickButton}
                    onCheck={this.onCheckBoxChange}
                  />
                </div>
              </CollapseItem>
            );
          })}
        </Collapse>
      </div>
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById('demo'));
