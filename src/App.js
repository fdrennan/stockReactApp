import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import InputForm from "./components/inputs/InputForm";
import StockImage from "./components/image/StockImage";
import Data from "./components/datatable/Data";

import axios from "axios";

const PORT = 7356;
// https://www.bignerdranch.com/blog/dont-over-react-rendering-binary-data/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      pic: [],
      ticker: "AAPL",
      imageUrl: `http://127.0.0.1:${PORT}/get_stocks`,
      dataUrl: `http://127.0.0.1:${PORT}/get_stocks_data`,
      dateStart: "2019-01-01",
      dateEnd: "2020-01-01"
    };
  }

  componentDidMount() {
    axios
      .get(this.state.dataUrl, {})
      .then(results => {
        this.setState({ data: JSON.parse(results.data.data) });
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  updateDataAPI() {
    axios
      .get(this.state.dataUrl, {})
      .then(results => {
        // console.log("Within updateDataAPI");
        // console.log(results.data.message);
        this.setState({ data: JSON.parse(results.data.data) });
      })
      .catch(function(error) {
        // console.log(error);
      });
  }

  updateState = base => {
    this.setState({
      ticker: base.ticker.value,
      imageUrl: `http://127.0.0.1:${PORT}/get_stocks?stocks=["${base.ticker.value}"]&startDate=${base.dateStart.value}&endDate=${base.dateEnd.value}`,
      dataUrl: `http://127.0.0.1:${PORT}/get_stocks_data?stocks=["${base.ticker.value}"]&startDate=${base.dateStart.value}&endDate=${base.dateEnd.value}`
    });
    this.updateDataAPI();
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <InputForm
            updateState={this.updateState}
            dateStart={this.state.dateStart}
            dateEnd={this.state.dateEnd}
          />
          <StockImage imageUrl={this.state.imageUrl} />
        </div>
        <Data data={this.state.data} />
      </div>
    );
  }
}

export default App;
