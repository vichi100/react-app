import React from "react";
import MultiSearchSelect from "./multiSearchSelect/MultiSearchSelect";

import Autocomplete from "../src/autocomplete/Autocomplete";

export default class Demo extends React.Component {
  render() {
    return (
      <div className="App">
        <Autocomplete
          options={[
            "Papaya",
            "Persimmon",
            "Paw Paw",
            "Prickly Pear",
            "Peach",
            "Pomegranate",
            "Pineapple"
          ]}
        />
      </div>
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById('demo'));
