import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import "../src/less/react-checkbox-tree.css";

import { connect } from "react-redux";
import { updateUser } from "./action/user-action";
// import Demo from "./demo.6";
import Demo from "./demo.11";
import ReadFile from "./ReadFile";

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser("sammy");
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React vichi
          </a>
        </header> */}

        <Demo />
        {/* <div onClick={this.onUpdateUser}> update user</div>
        {this.props.user} */}
        {/* {this.props.vichi} */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
  vichi: state.user
});

const mapActionToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
