// 단일 컴포넌트 구성
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> + 1 </button>
      <button onClick={() => setCount(count + 100)}> + 100 </button>
      <button onClick={() => setCount(count - 1)}> - 1 </button>
      <button onClick={() => setCount(count - 100)}> - 100 </button>
    </>
  );
}

export default App;
