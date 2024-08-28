import "./App.css";

function App() {
  const name = "React";
  const naver = {
    name: "Naver",
    url: "https://www.naver.com",
  };

  return (
    <div className="App">
      <h1
        style={{
          color: "blue",
          backgroundColor: "yellow",
        }}
      >
        Hello {name}! {naver.name} 바
      </h1>
      <a href={naver.url}>네이버로 이동</a>
    </div>
  );
}

export default App;
