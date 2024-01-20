import "./App.css";

function App() {
  const name = "Ruhan Zaman";
  const namArr = name.split("");
  return (
    <div className="main">
      <div className="container">
        {namArr?.map((item, i) => (
          <span className="item" style={{ transitionDuration: `${i * 40}ms` }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
