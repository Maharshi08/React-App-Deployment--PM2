function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Test App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <br /><br />

      <h3>Live Time</h3>
      <p>{time}</p>
    </div>
  );
}

export default App;