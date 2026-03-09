import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Stock1 from "./component/Stock1";
import Stock2 from "./component/Stock2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stock1" element={<Stock1 />} />
        <Route path="/stock2" element={<Stock2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;