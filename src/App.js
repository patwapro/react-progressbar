import { useEffect, useState } from "react";
import ProgressBar from "./Progressbar.js";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <p>{success ? "Complete!" : "Loading..."}</p>
    </div>
  );
}
