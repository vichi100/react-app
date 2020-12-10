import React, { Component } from "react";
import XLSX from "xlsx";

class ReadFile extends Component {
  onChange(e) {
    let files = e.target.files;
    console.log(files);
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);

    reader.onload = e => {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];
      console.log(ws);
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(dataParse);
    };
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h1>Upload File Here</h1>
        <input type="file" name="file" onChange={e => this.onChange(e)} />
        <p>
          <a href="TestFile/XLS_1000.xlsx" download>
            {" "}
            Click to Download{" "}
          </a>
        </p>
      </div>
    );
  }
}
export default ReadFile;
