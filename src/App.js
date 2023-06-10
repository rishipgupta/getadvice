
function App() {

  async function getAdvice() {
    const obj = await fetch("https://api.adviceslip.com/advice");
    const data = await obj.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
