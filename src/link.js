import React from "react";
import Tooltip from "../src/tool-tip/Tooltip";
import "./demo8.css";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadMore: false,
      students: [
        { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" }
      ]
    };
  }

  renderTableData = () => {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <td>
            <Tooltip message={id} position={"top-letf"}>
              {id}
            </Tooltip>
          </td>
          <td>
            <Tooltip message={id} position={"top-letf"}>
              {name}
            </Tooltip>
          </td>
          <td>
            <Tooltip message={id} position={"top-letf"}>
              {age}
            </Tooltip>
          </td>
          <td>
            <Tooltip message={id} position={"top-letf"}>
              {email}
            </Tooltip>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
    // const data = [
    //   { name: "test1", tooltip: "60" },
    //   { name: "test2", tooltip: "5" }
    // ];
    // return (
    //   <div className="container">
    //     {data.map((d, id) => {
    //       return (
    //         <div key={id}>
    //           {d.name}{" "}
    //           <Tooltip message={d.tooltip} position={"top-letf"}>
    //             {d.tooltip}
    //           </Tooltip>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
  }
}
