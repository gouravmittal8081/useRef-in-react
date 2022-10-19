import "./styles.css";
import React, { useRef } from "react";

export default function App() {
  let inputRef = useRef(null);

  function handleInput() {
    console.log("function called");

    // ye wala iske under by default 1000 put kr dega
    inputRef.current.value = "1000";

    // ye us input ke under ka color change kr dega
    inputRef.current.style.color = "red";

    // ye us input ko display ko none kr dega
    // inputRef.current.style.display="none";
  }
  return (
    <div className="App">
      <h1>useRef-in-react</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Update</button>
    </div>
  );
}
