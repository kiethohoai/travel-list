import { useState } from "react";

function Counter() {
  // Data
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // Handle
  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  // UI
  return (
    <div>
      {/* input range */}
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step:{step}</span>
      </div>{" "}
      <br />
      {/* input number */}
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>{" "}
      <br />
      {/* date time */}
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>{" "}
      <br />
      {/* Reset */}
      <div>
        {step !== 1 || count !== 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}

export default Counter;
