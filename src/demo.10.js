import React from "react";
import MultiSearchSelect from "./multiSearchSelect/MultiSearchSelect";

import "./demo-multi-select.css";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        "Allison",
        "Arthur",
        "Beryl",
        "Chantal",
        "Cristobal",
        "Danielle",
        "Dennis",
        "Ernesto",
        "Felix",
        "Fay",
        "Grace",
        "Gaston",
        "Gert",
        "Gordon"
      ]
    };
  }
  handleChange = arr => {
    // console.log(arr);
  };
  render() {
    return (
      <div className="multi-select-container">
        <MultiSearchSelect
          searchable={true}
          showTags={true}
          multiSelect={true}
          width="500px"
          onSelect={this.handleChange}
          options={this.state.values}
        />
      </div>
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById('demo'));
