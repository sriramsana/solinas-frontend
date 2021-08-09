import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import Loader from "react-loader-spinner";
import "./index.css";
import { Link } from "react-router-dom";

import { Component } from "react";

class Diameter extends Component {
  state = { diameterData: "", isFetched: false };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(
      "https://solinas-backend.herokuapp.com/diameters/"
    );

    const data = await response.json();
    this.setState({ diameterData: data, isFetched: true });
  };

  render() {
    const { diameterData, isFetched } = this.state;

    return (
      <div className="graph">
        <h1>Leak hole diameter</h1>
        {isFetched ? (
          <div className="glass-item">
            <LineChart width={930} height={350} data={diameterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id" />

              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="value" fill="red" size={2} />
            </LineChart>{" "}
          </div>
        ) : (
          <div className="loader-container">
            <Loader type="Oval" color="green" height="50" />
          </div>
        )}
        <Link to="/">
          <button className="btn">back</button>
        </Link>
      </div>
    );
  }
}

export default Diameter;
