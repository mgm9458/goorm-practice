// App 컴포넌트는 상태 관리와 자식 컴포넌트에 데이터 전달을 담당
// 컴포넌트 분리구성
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      {/* 숫자 표시 컴포넌트 삽입 */}
      <CounterDisplay count={count} />

      {/* 버튼 컴포넌트 삽입 */}
      <CounterButton label="+" func={() => setCount(count + 1)} />
      <CounterButton label="-" func={() => setCount(count - 1)} />
    </>
  );
}

export default App;
