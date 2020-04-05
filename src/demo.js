import React from "react";
import CheckboxTree from "../src/tree/CheckboxTree";
import "./less/react-checkbox-tree.css";
import Accordion from "./accordion/Accordion";
import AccordionItem from "./accordion/AccordionItem";
import "../src/accordion/index.css";

import "./demo.css";
// import "./less/checkbox.css";

// const nodes = [
//   {
//     value: "/app",
//     label: "app",
//     children: [
//       {
//         value: "Http",
//         label: "Http",
//         children: [
//           {
//             value: "Controllers",
//             label: "Controllers",
//             children: [
//               {
//                 value: "WelcomeController.js",
//                 label: "WelcomeController.js"
//               }
//             ]
//           },
//           {
//             value: "routes.js",
//             label: "routes.js"
//           }
//         ]
//       },
//       {
//         value: "Providers",
//         label: "Providers",
//         children: [
//           {
//             value: "EventServiceProvider.js",
//             label: "EventServiceProvider.js"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: "config",
//     label: "config",
//     children: [
//       {
//         value: "app.js",
//         label: "app.js"
//       },
//       {
//         value: "database.js",
//         label: "database.js"
//       }
//     ]
//   },
//   {
//     value: "public",
//     label: "public",
//     children: [
//       {
//         value: "/public/assets/",
//         label: "assets",
//         children: [
//           {
//             value: "/public/assets/style.css",
//             label: "style.css"
//           }
//         ]
//       },
//       {
//         value: "/public/index.html",
//         label: "index.html"
//       }
//     ]
//   },
//   {
//     value: "/.env",
//     label: ".env"
//   },
//   {
//     value: "/.gitignore",
//     label: ".gitignore"
//   },
//   {
//     value: "/README.md",
//     label: "README.md"
//   }
// ];

const nodes = [
  {
    label: "big data",
    value: "big data",
    children: [
      { label: "big data v ", value: "true x" },
      { label: "big data b", value: "y" },
      { label: "big data c", value: "c" },
      { label: "big data d", value: "b" },
      { label: "big data e", value: "d" },
      { label: "big data f", value: "s" }
    ]
  }
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClickedItems: [0],
      activeHoveredItems: [0],
      isAllSelected: false,
      subTitile: "",
      checked: [
        "/app/Http/Controllers/WelcomeController.js",
        "/app/Http/routes.js",
        "/public/assets/style.css",
        "/public/index.html",
        "/.gitignore"
      ],
      expanded: ["/app"],
      filterText: "",
      nodesFiltered: nodes,
      nodes
    };

    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterTree = this.filterTree.bind(this);
    this.filterNodes = this.filterNodes.bind(this);
  }

  toggleActive = index => {
    const position = this.state.activeClickedItems.indexOf(index);

    if (position !== -1) {
      this.setState({ activeClickedItems: [] });
    } else {
      this.setState({ activeClickedItems: [index] });
    }
  };

  handleClick({ activeItems }) {
    this.setState({ activeClickedItems: activeItems });
  }

  onCheck = checked => {
    this.setState({ checked });
  };

  onExpand(expanded) {
    this.setState({ expanded });
  }

  onFilterChange(e) {
    this.setState({ filterText: e.target.value }, this.filterTree);
  }

  filterTree() {
    // Reset nodes back to unfiltered state
    if (!this.state.filterText) {
      this.setState(prevState => ({
        nodesFiltered: prevState.nodes
      }));

      return;
    }

    const nodesFiltered = prevState => ({
      nodesFiltered: prevState.nodes.reduce(this.filterNodes, [])
    });

    this.setState(nodesFiltered);
  }

  filterNodes(filtered, node) {
    const { filterText } = this.state;
    const children = (node.children || []).reduce(this.filterNodes, []);

    if (
      // Node's label matches the search string
      node.label.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >
        -1 ||
      // Or a children has a matching node
      children.length
    ) {
      filtered.push({ ...node, children });
    }

    return filtered;
  }

  render() {
    const { checked, expanded, filterText, nodesFiltered } = this.state;

    return (
      <div className="filter-container">
        <Accordion atomic={true}>
          <AccordionItem title="Title x" subTitle={this.state.subTitle}>
            <div>
              <input
                className="filter-text"
                placeholder="Search..."
                type="text"
                value={filterText}
                onChange={this.onFilterChange}
              />
              <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nativeCheckboxes={true}
                nodes={nodesFiltered}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
              />
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById('demo'));
