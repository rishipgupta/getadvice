import { useState } from "react";

function App() {
  // Setting useState to grab the advice everytime we click button
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const obj = await fetch("https://api.adviceslip.com/advice");
    const data = await obj.json();
    // console.log(data);
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>Click to get advice!!</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
