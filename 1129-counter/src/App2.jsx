// App 컴포넌트는 상태 관리와 자식 컴포넌트에 데이터 전달을 담당
// 컴포넌트 분리구성
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import "./App.css";

// app -> usestate
// counterdisplay, counterButton
// 리액트는 단방향 데이터기때문에 위에서 아래로 할당할 수 있고 아래에서 위로는 줄 수 없다
function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("준성");

  return (
    <>
      <h1>Counter</h1>
      {/* 숫자 표시 컴포넌트 삽입 */}
      <CounterDisplay conuter={count} />

      {/* 버튼 컴포넌트 삽입 */}
      <CounterButton label="+" func={() => setCount(count + 1)} />
      <CounterButton label="-" func={() => setCount(count - 1)} />
      <CounterButton label="*" func={() => setCount(count * 2)} />
    </>
  );
}

export default App;
