import { useState, useEffect } from "react";
import Advice from "./Advice";
import Message from "./Message";

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

  // Want to show a piece of advice when we load up page instead of no message at all
  // Using useEffect that will load once the application loads
  // We use Dependency array to state the initial value count
  // However it shows 2 instead of 1 because of strict mode in react 
  // Because of strict mode in react the useEffect is called twice instead of just 1

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Click to get advice!!</h1>
      <Advice advice={advice} />
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

export default App;
