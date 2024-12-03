/* eslint-disable react/prop-types */
import { useState } from "react";

// App.jsx에서 설정한 컴포넌트 안에 props로 addTodo를 설정했기 때문에 import가 필요없이 {}를 이용하면 됨
const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");
  // 인풋의 초기값은 빈칸으로 셋팅, 구조분해 할당

  //할 일 추가 함수
  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        // value={input} = 상태가 변경되면
        onChange={(e) => setInput(e.target.value)}
        // onChange가 감지되면 (= 인풋에서 변화가 일어나면) setInput 함수 실행해. 그 이벤트가 일어난 요소의 값을 뜯어서 setInput(여기에 넣어라)
        placeholder="쿠쿠루삥뽕"
      />
      <button onClick={handleAdd}>할 일 등록</button>
    </div>
  );
};

export default TodoInput;
