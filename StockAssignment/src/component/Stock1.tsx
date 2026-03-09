import React from "react";
import "./Stock.css";

const Stock1: React.FC = () => {
  return (
    <div className="stockPage">
      <div className="stockCard">

        <h1 className="stockTitle">📈 Stock 1</h1>

        <div className="stockInfo">
          <p><strong>Name:</strong> Stock 1</p>
          <p><strong>Established:</strong> 2005</p>

          <div className="values">
            <span className="min">Min Value: 95</span>
            <span className="max">Max Value: 120</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stock1;