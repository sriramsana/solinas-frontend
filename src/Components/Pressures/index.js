import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import "./index.css";
import { Link } from "react-router-dom";
import { Component } from "react";

class Pressures extends Component {
  state = { diameterData: "" };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(
      "https://salty-gorge-59304.herokuapp.com/pressure/"
    );

    const data = await response.json();
    this.setState({ diameterData: data });
  };

  render() {
    const { diameterData } = this.state;

    return (
      <div className="graph">
        <h1>Pressures</h1>

        <div className="glass-item">
          <LineChart width={930} height={350} data={diameterData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="value" fill="red" />
          </LineChart>{" "}
        </div>
        <Link to="/">
          <button className="btn">back</button>
        </Link>
      </div>
    );
  }
}

export default Pressures;
