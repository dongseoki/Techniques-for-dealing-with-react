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
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
    </div>
  );
}

export default App;
