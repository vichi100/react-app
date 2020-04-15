import React, { Component } from "react";

export default class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;

    return (
      <header className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    );
  }
}
