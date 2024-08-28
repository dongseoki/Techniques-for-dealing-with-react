import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
function App() {
  const name = "React";
  const naver = {
    name: "Naver",
    url: "https://www.naver.com",
  };

  return (
    <div className="App">
      <Hello />
      <Welcome />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
