import React, { useState } from "react";
import styled from "styled-components";

const StyledTree = styled.div`
  line-height: 1.5;
`;
const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
const Collapsible = styled.div`
  height: ${p => (p.isOpen ? "0" : "auto")};
  overflow: hidden;
`;

const Leaf = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      <label>
        <input name={name} type="checkbox" value={name} checked={true} />
        {name}
      </label>
      {/* render the extension or fallback to generic file icon  */}
      {/* {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span> */}
    </StyledFile>
  );
};

const Root = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <label>
          <input name={name} type="checkbox" value={name} checked={true} />
          {name}
        </label>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const Tree = ({ children }) => {
  return <StyledTree>{children}</StyledTree>;
};

Tree.Leaf = Leaf;
Tree.Root = Root;

export default function App() {
  return (
    <div className="App">
      <Tree>
        <Tree.Root name="src">
          <Tree.Root name="Components">
            <Tree.Leaf name="Modal.js" />
            <Tree.Leaf name="Modal.css" />
          </Tree.Root>
          <Tree.Leaf name="index.js" />
          <Tree.Leaf name="index.html" />
        </Tree.Root>
        <Tree.Leaf name="package.json" />
      </Tree>
    </div>
  );
}
