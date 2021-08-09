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

import { Link } from "react-router-dom";

import { Component } from "react";

class All extends Component {
  state = { allData: "", isFetched: false };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch("https://solinas-backend.herokuapp.com/all/");

    const data = await response.json();
    this.setState({ allData: data, isFetched: true });
  };

  render() {
    const { allData, isFetched } = this.state;

    return (
      <div className="graph">
        <h1>All Graph Data</h1>
        {isFetched ? (
          <div className="glass-item">
            <LineChart width={730} height={350} data={allData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id" />

              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="diameterVal" fill="red" size={3} />
              <Line dataKey="tempval" lineColor="red" fill="blue" size={2} />
              <Line
                dataKey="corisionVal"
                lineColor="red"
                fill="yellow"
                size={2}
              />
              <Line dataKey="pressureValue" color="red" fill="white" size={2} />
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

export default All;
