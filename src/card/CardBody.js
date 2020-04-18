import React, { Component } from "react";
import Button from "./Button";
import ReadMoreReact from "read-more-react";
import ReadMore from "./ReadMore";
import Modal from "./Modal";

export default class CardBody extends React.Component {
  state = { show: false };
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

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="card-body" onBlur={() => this.setState({ show: false })}>
        <div className="card-title">{this.props.title}</div>

        <div className="body-content">{this.props.text}</div>
        <button type="button" onClick={this.showModal}>
          read more
        </button>
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
          <Button />
          <Button />
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="card-title">{this.props.title}</div>

          <div className="modal-body-content">{this.props.text}</div>
          <div className="card-button">
            <Button />
            <Button />
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
        </Modal>
      </div>
    );
  }
}
