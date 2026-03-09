import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import DataGridPage from "./Datagridpage";

interface StockData {
  timestamp: string;
  value: number;
}

interface StockRow {
  name: string;
  timestamp: string;
  value: number;
}

const Dashboard: React.FC = () => {
  const [stock1, setStock1] = useState(100);
  const [stock2, setStock2] = useState(200);

  const [data1, setData1] = useState<StockData[]>([]);
  const [data2, setData2] = useState<StockData[]>([]);

  const [min1, setMin1] = useState(100);
  const [max1, setMax1] = useState(100);

  const [min2, setMin2] = useState(200);
  const [max2, setMax2] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();

      setStock1(prev => {
        const newVal = prev + (Math.random() * 10 - 5);

        setData1(d => [...d.slice(-9), { timestamp, value: newVal }]);
        setMin1(m => Math.min(m, newVal));
        setMax1(m => Math.max(m, newVal));

        return newVal;
      });

      setStock2(prev => {
        const newVal = prev + (Math.random() * 10 - 5);

        setData2(d => [...d.slice(-9), { timestamp, value: newVal }]);
        setMin2(m => Math.min(m, newVal));
        setMax2(m => Math.max(m, newVal));

        return newVal;
      });

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tableRows: StockRow[] = [
    ...data1.map(d => ({
      name: "Stock 1",
      timestamp: d.timestamp,
      value: d.value
    })),
    ...data2.map(d => ({
      name: "Stock 2",
      timestamp: d.timestamp,
      value: d.value
    }))
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Stock Dashboard</h1>

      <h2>Stock 1</h2>
      <p>
        Value: {stock1.toFixed(2)} | Min: {min1.toFixed(2)} | Max: {max1.toFixed(2)}
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="blue" />
        </LineChart>
      </ResponsiveContainer>

      <h2 style={{ marginTop: "40px" }}>Stock 2</h2>
      <p>
        Value: {stock2.toFixed(2)} | Min: {min2.toFixed(2)} | Max: {max2.toFixed(2)}
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="green" />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ marginTop: "40px" }}>
        <DataGridPage rows={tableRows} />
      </div>
    </div>
  );
};

export default Dashboard;