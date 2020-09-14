import React from "react";
import "./MultiSearchSelect.css";
import PropTypes from "prop-types";

// https://github.com/vilvaathibanpb/react-search-multi-select/tree/master/src
//https://codesandbox.io/s/react-search-multi-select-1wspz?file=/package.json

class MultiSearchSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      selected: this.props.selected,
      userInput: ""
    };
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.hide);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.hide);
  }

  componentDidUpdate() {
    if (this.props.onSelect) {
      this.props.onSelect(this.state.selected);
    }
    if (this.props.onUserInput) {
      this.props.onUserInput(this.state.userInput);
    }
  }
  show = e => {
    e.preventDefault();
    this.setState({
      showOptions: true
    });
  };

  hide = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({
        showOptions: false
      });
    }
  };
  handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      userInput: e.target.value
    });
  };
  addTag = element => {
    console.log("vichi");
    let current = this.state.selected;
    if (this.state.selected.indexOf(element) === -1) {
      current.push(element);
      let single = [];
      single.push(element);
      this.setState({
        selected: this.props.multiSelect ? current : single,
        userInput: ""
      });
    } else {
      current.splice(this.state.selected.indexOf(element), 1);
      let single = current.slice(this.state.selected.indexOf(element), 1);
      this.setState({
        selected: this.props.multiSelect ? current : single,
        userInput: ""
      });
    }
  };

  removeTag = i => {
    let current = this.state.selected;
    current.splice(i, 1);
    this.setState({
      ...this.state,
      selected: current
    });
  };
  setWrapperRef = node => {
    this.wrapperRef = node;
  };
  selectAll = e => {
    e.preventDefault();
    let entire = this.props.options.slice();
    this.setState({
      selected: entire
    });
  };

  unselectAll = e => {
    e.preventDefault();
    this.setState({
      selected: []
    });
  };

  none = () => {
    return;
  };

  render() {
    return (
      <div
        ref={this.setWrapperRef}
        className={this.props.className}
        style={{ width: this.props.width, backgroundColor: "#ffffff" }}
      >
        <div>
          <div
            className="input-area"
            contentEditable={false}
            onFocus={this.props.searchable ? this.show : this.none}
            onClick={this.props.searchable ? this.none : this.show}
          >
            {this.props.searchable && (
              <input
                type="text"
                value={this.state.userInput}
                onChange={this.handleChange}
                placeholder={this.props.searchPlaceholder}
                className="input-box"
              />
            )}

            {this.props.showTags && (
              <div className="tag-container" contentEditable={false}>
                {this.state.selected.map((e, i) => {
                  return (
                    <div className="tags" key={i}>
                      {e}
                      <div
                        className="remove-tag"
                        onClick={e => {
                          e.preventDefault(); 
                          this.removeTag(i);
                        }}
                      >
                        | x
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {true && this.props.options && (
            <div
              className="option-area"
              style={{
                maxHeight: this.props.optionsContainerHeight
              }}
            >
              {this.props.options.map((e, i) => {
                console.log("vichi", e);
                if (
                  e.toLowerCase().indexOf(this.state.userInput.toLowerCase()) >
                  -1
                ) {
                  return (
                    <div
                      className={
                        "option" +
                        (this.state.selected.indexOf(e) > -1 ? " active" : "")
                      }
                      key={i}
                      onClick={ev => {
                        ev.preventDefault();
                        this.addTag(e);
                      }}
                    >
                      {e} <span style={{ float: "right" }}>&#10003;</span>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

MultiSearchSelect.propTypes = {
  options: PropTypes.array.isRequired,
  optionsContainerHeight: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  selected: PropTypes.array,
  width: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  textColor: PropTypes.string,
  textSecondaryColor: PropTypes.string,
  className: PropTypes.string,
  searchable: PropTypes.bool,
  showTags: PropTypes.bool,
  multiSelect: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onUserInput:
    PropTypes.func /* Function to get values typed by user in Search box */
};

MultiSearchSelect.defaultProps = {
  optionsContainerHeight: "300px",
  searchPlaceholder: "Search...",
  selected: [],
  className: "",
  width: "200px",
  primaryColor: "#ffffff",
  secondaryColor: "#ffffff",
  textColor: "#000",
  textSecondaryColor: "#fff",
  searchable: true,
  showTags: true,
  multiSelect: true
};

export default MultiSearchSelect;
