import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Mainpage extends Component {
  state = { value: 22, option: "diameters", random: "", response: "" };

  selectOption = (e) => {
    this.setState({ option: e.target.value });
  };

  getInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onPost = async () => {
    const { option, value } = this.state;
    const data = { Value: value };
    const url = `https://solinas-backend.herokuapp.com/${option}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    const data1 = await response.json();

    this.setState({ response: data1.resp });
  };

  SubmitBtn = (event) => {
    event.preventDefault();
    this.onPost();
  };
  deleteData = () => {};
  generateRandom = () => {
    const num = Math.ceil(Math.random() * 100);
    this.setState({ random: num, value: num });
  };

  render() {
    const { option, random, response } = this.state;

    return (
      <div className="bg">
        <h1 className="main-heading">Solinas Project</h1>
        <div className="cards">
          <Link to="/all">
            {" "}
            <button className="button">
              <span>All</span>
            </button>
          </Link>
          <Link to="/diameter">
            {" "}
            <button className="button">
              <span>Leak hole diameter</span>
            </button>
          </Link>
          <Link to="/corision">
            <button className="button">
              <span>Percentage of surface corrosion</span>
            </button>
          </Link>
          <Link to="/temperatures">
            <button className="button">
              <span>Temperature</span>
            </button>
          </Link>
          <Link to="/pressure">
            <button className="button">
              <span>Pressure</span>
            </button>
          </Link>
        </div>
        <form className="card" onSubmit={this.SubmitBtn}>
          <div className="search-container">
            <input
              type="number"
              min={0}
              max={99}
              placeholder="Enter Number B/w 0 & 99"
              onChange={(event) => this.getInput(event)}
              value={random}
              contentEditable
            />
            <button className="btn" onClick={this.generateRandom} type="button">
              Generate random{" "}
            </button>
          </div>
          <select onChange={(e) => this.selectOption(e)}>
            <option value="diameters">Leak hole diameter</option>
            <option value="corision">Percentage of surface corrosion</option>
            <option value="temp">Temperature</option>
            <option value="pressure"> Pressure</option>
          </select>
          <button className="btn" type="submit" onSubmit={this.SubmitBtn}>
            Post{" "}
          </button>{" "}
          <p>{response}</p>
        </form>{" "}
      </div>
    );
  }
}

export default Mainpage;
