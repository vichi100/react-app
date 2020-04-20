import React, { Component } from "react";
import Button from "./Button2";
import ReadMoreReact from "read-more-react";
import ReadMore from "./ReadMore";
import Modal from "./Modal";
import { findByLabelText } from "@testing-library/dom";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default class CardBody extends React.Component {
  state = { showUpdate: false };
  //   componentDidMount() {
  //     console.log(
  //       "mounted width - ",
  //       window.getComputedStyle(this.wrapper).getPropertyValue("width")
  //     );
  //   }

  //   getWrapperWidth() {
  //     if (this.wrapper) {
  //       console.log(
  //         "get wrapper width",
  //         window.getComputedStyle(this.wrapper).getPropertyValue("width")
  //       );
  //     } else {
  //       console.log("get wrapper - no wrapper");
  //     }
  //   }

  showUpdateModal = () => {
    this.setState({ showUpdate: true });
  };

  hideUpdateModal = () => {
    this.setState({ showUpdate: false });
  };

  render() {
    return (
      <div className="card-body" onBlur={() => this.setState({ show: false })}>
        <div className="card-title">{this.props.title}</div>

        <div className="body-content-wrapper">
          <div className="body-content">{this.props.text}</div>
          <div className="view-details" onClick={this.showUpdateModal}>
            See full details
          </div>
        </div>

        {/* <ReadMoreReact text={this.props.text} /> */}

        {/* <div ref={node => (this.wrapper = node)}>
          <ReadMore
            text={this.props.text}
            umberOfLines={4}
            lineHeight={1.4}
            showLessButton={true}
            onContentChange={this.getWrapperWidth}
          />
        </div> */}

        <div className="card-button">
          <button className="btn-display-search-result">View result</button>
          <button className="btn-delete-saved-search">Delete</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <div className="alert">Alert setting</div>
          <div className="date">{this.props.date}</div>
        </div>
        <Modal show={this.state.showUpdate} handleClose={this.hideUpdateModal}>
          <div className="modal-header">
            <h2>Update Search</h2>
            <div className="close-modal-btn" onClick={this.hideUpdateModal}>
              ×
            </div>
          </div>
          <div className="modal-body">
            <div className="update-title-wrapper">
              <div class="col-25">
                <label for="fname">Title</label>
              </div>
              <div class="update-title">
                <input
                  className="input"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder={this.props.title}
                />
              </div>
            </div>
            <div className="update-title-wrapper">
              <div class="col-25">
                <label for="subject">Description</label>
              </div>
              <div class="update-content">
                <textarea
                  className="textarea"
                  id="subject"
                  name="subject"
                  placeholder={this.props.text}
                />
              </div>
            </div>
            <div className="update-alert">Alert me every:</div>
            <div className="days-box-wrapper">
              {days.map((day, index) => (
                <div className="days-box">
                  <input type="checkbox" checked="false" />
                  {day}
                </div>
              ))}
            </div>
            <div className="update-alert">
              You will recive an email notification at 5pm each day you select
            </div>
          </div>
          {/* <div className="modal-footer">
              <div className="card-button">
                <button className="btn-display-search-result">
                  View result
                </button>
                <button className="btn-delete-saved-search">Delete</button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px"
                }}
              >
                <div className="alert">Alert setting</div>
                <div className="date">{this.props.date}</div>
              </div>
            </div> */}
        </Modal>
      </div>
    );
  }
}
