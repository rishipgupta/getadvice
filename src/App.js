import { useState } from "react";

function App() {
  // Setting useState to grab the advice everytime we click button
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const obj = await fetch("https://api.adviceslip.com/advice");
    const data = await obj.json();
    // console.log(data);
    setAdvice(data.slip.advice);
    // using arrow function in setCount() takes first the current count and then update it to new count
    setCount(count => count + 1);
  }

  return (
    <div>
      <h1>Click to get advice!!</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <h3>Number of times you asked for an advice: {count}</h3>
    </div>
  );
}

export default App;
