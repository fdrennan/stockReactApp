import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import InputForm from "./components/inputs/InputForm";
import StockImage from "./components/image/StockImage";
import axios from "axios";
// https://www.bignerdranch.com/blog/dont-over-react-rendering-binary-data/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      pic: [],
      dataUrl: "http://127.0.0.1:8000/get_stocks_data",
      ticker: "AAPL",
      imageUrl: `http://127.0.0.1:7263/get_stocks?stocks=["MO"]`
    };
  }

  componentDidMount() {
    console.log("Mounted");
    axios
      .get(this.state.dataUrl, {
        params: {
          stocks: '["DIA"]'
        }
      })
      .then(results => {
        this.setState({ dataUrl: JSON.parse(results.data) });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateTicker = value => {
    this.setState({ ticker: value });
    this.setState({
      imageUrl: `http://127.0.0.1:7263/get_stocks?stocks=["${value}"]`
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <InputForm updateTicker={this.updateTicker} />
          <StockImage imageUrl={this.state.imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
