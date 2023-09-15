import { useState } from "react";
import "../style.css";

const App = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="randomNum">
            <p>
              Random Sayı: <span> {randomNum} </span>
            </p>
          </div>
          <div className="numContainer">
            <p>Min :</p>
            <input
              type="number"
              value={minVal}
              onChange={(e) => setMinVal(e.target.value)}
            />
          </div>
          <div className="numContainer">
            <p>Max :</p>
            <input
              type="number"
              value={maxVal}
              onChange={(e) => setMaxVal(e.target.value)}
            />
          </div>
          <button onClick={handleRandomNum}>Get Random Number</button>
        </div>
      </div>
    </>
  );
};

export default App;
