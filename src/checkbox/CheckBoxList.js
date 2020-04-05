import React from "react";
import CheckBox from "./CheckBox";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./style.css";

export default function CheckBoxList({ options, onClickButton, onCheck }) {
  const checkBoxOptions = (
    <div className="checkbox-list">
      {options.map((option, index) => {
        return (
          <CheckBox
            key={index}
            name={option.name}
            value={option.value}
            tick={option.checked}
            onCheck={e => onCheck(option.value, e.target.checked)}
          />
        );
      })}
    </div>
  );

  return (
    <div className="checkbox-list">
      <div className="select-option">
        <ButtonGroup onClick={e => onClickButton(e)}>
          <Button value="10">10</Button>
          <Button value="20">20</Button>
          <Button value="All">All</Button>
        </ButtonGroup>
      </div>

      {checkBoxOptions}
    </div>
  );
}
