import React from "react";

const CardHeader = props => {
  console.log("header props: ", props);
  return (
    <header className="card-header">
      <h4 className="card-header--title">{props.children}</h4>
    </header>
  );
};

export default CardHeader;
