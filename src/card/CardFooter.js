import React from "react";

const CardFooter = props => {
  return (
    <div className="card-footer">
      <div className="alert">Alert setting</div>
      <div className="date">{props.children}</div>
    </div>
  );
};

export default CardFooter;
