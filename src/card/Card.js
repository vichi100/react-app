import React, { Component } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default class Card extends React.Component {
  render() {
    return (
      <CardBody
        title={this.props.details.title}
        text={this.props.details.text}
        date={this.props.details.date}
      />
    );
  }
}
