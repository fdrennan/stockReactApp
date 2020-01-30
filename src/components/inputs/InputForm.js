import React, { Component } from "react";
import "react-dropdown-select";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "2019-01-01",
      endDate: "2020-01-01",
      defaultTicker: "AAPL"
    };
  }

  updateStart = a => {
    this.setState({ startDate: a.target.value });
  };

  updateEnd = a => {
    this.setState({ endDate: a.target.value });
  };

  submitFunction = e => {
    e.preventDefault();
    this.props.updateState(e.target);
  };

  handleChange = e => {
    this.setState({ defaultTicker: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitFunction}>
        <label>
          Name:
          <input
            type="text"
            name="ticker"
            value={this.state.defaultTicker}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="dateStart"
            value={this.state.startDate}
            onChange={this.updateStart}
          />
          <input
            type="date"
            name="dateEnd"
            value={this.state.endDate}
            onChange={this.updateEnd}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;
