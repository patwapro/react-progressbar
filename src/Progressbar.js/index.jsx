import { useState, useEffect } from "react";

export default function ProgressBar({ value = 10, onComplete = () => {} }) {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value, onComplete]);

  return (
    <div className="progress-bar">
      <span style={{ color: percentage > 49 ? "#fff" : "#000" }}>
        {percentage.toFixed()}%
      </span>
      <div
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={percentage}
      />
    </div>
  );
}
