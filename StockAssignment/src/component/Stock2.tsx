import React from "react";
import "./Stock.css";

const Stock2: React.FC = () => {
  return (
    <div className="stockPage">
      <div className="stockCard">

        <h1 className="stockTitle">📉 Stock 2</h1>

        <div className="stockInfo">
          <p><strong>Name:</strong> Stock 2</p>
          <p><strong>Established:</strong> 2010</p>

          <div className="values">
            <span className="min">Min Value: 180</span>
            <span className="max">Max Value: 250</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stock2;