import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bubbles, setBubbles] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const addBubble = () => {
    const colors = ["yellow", "green", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBubbles((prev) => [...prev, randomColor]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addBubble();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    if (bubbles[index] === "yellow") {
      const newBubbles = [...bubbles];
      newBubbles[index] = "red";
      setBubbles(newBubbles);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <h1>🫧 Random Colored Bubbles</h1>

      <div className="counter">
        Yellow bubbles clicked: <span>{count}</span>
      </div>

      <div className="bubble-container">
        {bubbles.map((color, index) => (
          <div
            key={index}
            className="bubble"
            onClick={() => handleClick(index)}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;