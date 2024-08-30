import "./App.css";
import Hello from "./component/Hello";

function App() {
  const name = "React";
  const naver = {
    name: "Naver",
    url: "https://www.naver.com",
  };

  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
