import React from "react";

import Button from "./Button";

export default function CountButton(value, onClick) {
  // handleClick = () => {
  //     console.log("Button clicked...")
  //     let buttonText = this.state.buttonText == "Start" ? "Stop" : "Start"
  //     this.setState({ buttonText: buttonText })
  // }

  //   return <Button onClick={handleClick}>{name}</Button>;
  return (
    <Button value={value} onClick={e => onClick(value, e.target.onClick)} />
  );
}
