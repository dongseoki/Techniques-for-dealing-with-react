import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";

function App() {
  const name = "React";
  const naver = {
    name: "Naver",
    url: "https://www.naver.com",
  };

  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
