import React, { Component } from "react";
import "./button.css";

// const ButtonStyle = styled.button`
//   height: 10px;
//   width: 50px;
//   font-size: 2.6vmin;
//   cursor: pointer;
//   box-shadow: rgba(255, 255, 255, 0.05) 0px 3px 20px;
//   border-width: initial;
//   background-color: grey;
//   color: white;
//   border-style: none;
//   border-color: initial;
//   border-image: initial;
//   outline: none;
//   &:hover {
//     background-color: #445b65;
//     color: white;
//   }
// `;
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Start"
    };
  }

  handleClick = () => {
    console.log("Button clicked...");
    // let buttonText = this.state.buttonText == "Start" ? "Stop" : "Start";
    // this.setState({ buttonText: buttonText });
  };

  render() {
    return (
      <div className="button-style" onClick={this.handleClick}>
        {this.state.buttonText}
      </div>
    );
  }
}
