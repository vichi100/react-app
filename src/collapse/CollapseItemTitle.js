import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";

export default function CollapseItemTitle({
  className,
  expanded,
  onClick,
  //   onMouseOver,
  rootTag: Root,
  title,
  subTitile,
  uuid
}) {
  const style = {
    cursor: "pointer",
    margin: 0
  };

  if (typeof title === "object") {
    return React.cloneElement(title, {
      onClick,
      id: `react-sanfona-item-title-${uuid}`,
      "aria-controls": `react-sanfona-item-body-${uuid}`
    });
  }

  return (
    <Root
      aria-controls={`react-sanfona-item-body-${uuid}`}
      aria-expanded={expanded}
      className={cx("react-sanfona-item-title", className)}
      id={`react-sanfona-item-title-${uuid}`}
      onClick={onClick}
      style={style}
    >
      {title}
      <div className="react-sanfona-item-subtitle">{subTitile}</div>
    </Root>
  );
}

CollapseItemTitle.defaultProps = {
  rootTag: "h3"
};

CollapseItemTitle.propTypes = {
  className: PropTypes.string,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  //   onMouseOver: PropTypes.func,
  rootTag: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  uuid: PropTypes.string
};
