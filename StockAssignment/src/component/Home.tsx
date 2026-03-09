import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">📊 Stock Monitoring System</h1>

      <div className="tiles">

        <Link to="/dashboard" className="tile">
          <div>
            <div className="icon">📈</div>
            <h3>Dashboard</h3>
            <p>View live stock analytics</p>
          </div>
        </Link>

        <Link to="/stock1" className="tile">
          <div>
            <div className="icon">💹</div>
            <h3>Stock 1</h3>
            <p>Monitor stock 1 performance</p>
          </div>
        </Link>

        <Link to="/stock2" className="tile">
          <div>
            <div className="icon">📉</div>
            <h3>Stock 2</h3>
            <p>Track stock 2 changes</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Home;