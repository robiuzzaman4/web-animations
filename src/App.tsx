import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const name = "Web Animations";
  const namArr = name.split("");
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-neutral-50 flex flex-col items-center justify-center gap-4">
      <div className="container w-fit">
        {namArr?.map((item, i) => (
          <span className="item" style={{ transitionDuration: `${i * 40}ms` }}>
            {item}
          </span>
        ))}
      </div>
      <Link to={"/motion"} className="block hover:underline hover:text-fuchsia-500">
        Framer Motion
      </Link>
    </div>
  );
}

export default App;
