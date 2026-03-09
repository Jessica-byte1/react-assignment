import React, { useState } from "react";

interface StockRow {
  name: string;
  timestamp: string;
  value: number;
}

interface Props {
  rows: StockRow[];
}

const DataGridPage: React.FC<Props> = ({ rows }) => {
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof StockRow>("name");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredData = rows.filter(
    row =>
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.timestamp.includes(filter) ||
      row.value.toString().includes(filter)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortAsc ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortAsc ? 1 : -1;
    return 0;
  });

  const handleSort = (column: keyof StockRow) => {
    if (sortColumn === column) setSortAsc(!sortAsc);
    else {
      setSortColumn(column);
      setSortAsc(true);
    }
  };

  return (
    <div>
      <h2>Stock Data</h2>

      <input
        placeholder="Filter..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Stock</th>
            <th onClick={() => handleSort("timestamp")}>Time</th>
            <th onClick={() => handleSort("value")}>Value</th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row, i) => (
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.timestamp}</td>
              <td>{row.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGridPage;