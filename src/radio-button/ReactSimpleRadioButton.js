import React from "react";
import "./style.css";
/* eslint-disable no-unused-expressions */

function RadioButton(props) {
  const indexOf = (options, value) => {
    let optionIndex = -1;
    for (let i = 0; i < options.length; i++) {
      if (value == options[i]) {
        optionIndex = i;
        break;
      }
    }
    return optionIndex;
  };

  const onOptionClick = item => {
    console.log(item);
    props.onChange ? props.onChange(item) : null;
  };

  let className = "radio_component";
  let isLinear = props.isLinear;
  let options =
    props.options && Array.isArray(props.options) ? props.options : [];
  let defaultSelected =
    props.defaultSelected && indexOf(props.options, props.defaultSelected) > -1
      ? props.defaultSelected
      : null;

  return (
    <div className={className}>
      <div className="container">
        <ul className={"radio_group_container " + (isLinear ? "linear" : "")}>
          {options.map((item, index) => {
            return (
              <li key={index} className={"radio_item linear"}>
                <input
                  type="radio"
                  defaultChecked={item === defaultSelected}
                  id={"option_label" + index}
                  name="selector"
                />
                <label
                  htmlFor={"option_label" + index}
                  onClick={() => onOptionClick(item)}
                  className="radio_label"
                >
                  {item}
                </label>
                <div className="check"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RadioButton;
