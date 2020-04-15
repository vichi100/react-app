import React, { Component } from "react";
import Button from "./Button";

export default class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="card-title">{this.props.title}</div>

        <div className="body-content">{this.props.text}</div>

        <div className="card-button">
          <Button />
          <Button />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <div className="alert">Alert setting</div>
          <div className="date">{this.props.date}</div>
        </div>
      </div>
    );
  }
}
