import React, { Component } from "react";
import Select from "react-dropdown-select";
import "react-dropdown-select";
class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        "Sydney",
        "Melbourne",
        "Brisbane",
        "Adelaide",
        "Perth",
        "Hobart"
      ],
      values: ["Hobart"]
    };
  }

  submitFunction = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    this.props.updateTicker(e.target.name.value);
  };

  render() {
    return (
      <form onSubmit={this.submitFunction}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;
