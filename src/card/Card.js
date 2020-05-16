import React, { useState } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import classNames from "classnames";

const Card = props => {
  const [isOpen, setIsOpen] = useState(false);
  const viewDetails = item => {
    setIsOpen(item);
  };

  const cardContentContainer = classNames([
    "card-content-container",
    {
      active: isOpen
    }
  ]);
  return (
    <div className={cardContentContainer}>
      <CardHeader>{props.details.title}</CardHeader>
      <CardBody viewDetails={viewDetails}>{props.details}</CardBody>
      <CardFooter>{props.details.date}</CardFooter>
    </div>
    // <CardBody
    //   title={this.props.details.title}
    //   text={this.props.details.text}
    //   date={this.props.details.date}
    // />
  );
};

export default Card;
