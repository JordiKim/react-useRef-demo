import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const cyanRef = useRef(null);
  const orangeRef = useRef(null);

  console.log("App render...");
  const submitHandler = () => {
    console.log("value:", inputRef.current.value);
    console.log("type:", inputRef.current.type);
    inputRef.current.type = "password";
  };

  const goOrange = () => {
    window.scrollTo({
      top: orangeRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goCyan = () => {
    window.scrollTo({
      top: cyanRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App bg-white">
      <input type="text" ref={inputRef} />
      <button onClick={submitHandler}>Submit</button>
      {/* offsetTop */}
      <div className="h-[600px] w-full bg-cyan-500" ref={cyanRef}>
        <button onClick={goOrange}>Go Orange</button>
      </div>
      <div className="h-[600px] w-full bg-orange-500" ref={orangeRef}>
        <button onClick={goCyan}>Go Cyan</button>
      </div>
    </div>
  );
}

export default App;
