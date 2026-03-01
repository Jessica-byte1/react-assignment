import React, { useEffect, useState } from "react";

const MoveImage = () => {
  const [x, setX] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      setX((prevX) => {
        if (prevX >= 800) return prevX; // stop at boundary
        return prevX + 20;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isMoving]);

  const reset = () => {
    setIsMoving(false);
    setX(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🚗 Car Animation</h2>

        <div style={styles.road}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/642/154/non_2x/blue-car-logo-design-side-view-car-vector.jpg"
            alt="car"
            style={{
              ...styles.car,
              transform: `translateX(${x}px)`,
            }}
          />
        </div>

        <div style={styles.buttonContainer}>
          <button style={styles.startBtn} onClick={() => setIsMoving(true)}>
            Start
          </button>

          <button style={styles.stopBtn} onClick={() => setIsMoving(false)}>
            Stop
          </button>

          <button style={styles.resetBtn} onClick={reset}>
            Reset
          </button>
        </div>

        <p style={styles.position}>Position: {x}px</p>
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "900px",
  },
  heading: {
    marginBottom: "20px",
  },
  road: {
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  car: {
    width: "120px",
    transition: "transform 0.1s linear",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  startBtn: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  stopBtn: {
    padding: "10px 20px",
    backgroundColor: "#f39c12",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  resetBtn: {
    padding: "10px 20px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  position: {
    marginTop: "15px",
    fontWeight: "bold",
  },
};

export default MoveImage;