import React from "react";

export default function Button({ value, onclick }) {
  return (
    <label>
      <input type="button" value={value} onClick={onclick} />
      {value}
    </label>
  );
}
