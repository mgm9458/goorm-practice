/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../css/TodoInput.module.css";
import { FaPlus } from "react-icons/fa6";

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
  // input 박스에 할 일을 작성하고 엔터키를 누르면 addTodo 함수가 실행된다

  const handleEnter = (e) => {
    if (e.keyCode === 229) return;
    // 맥에서 한글을 입력하는 동작(onKeyDown/Up)에서 함수 콜링이 두 번 중첩되는 이슈가 있어 해결책 삽입
    if (e.key === "Enter") handleAdd();
    // Enter를 누르면 할 일 추가
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        value={input}
        // value={input} = 상태가 변경되면
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnter}
        onBlur={handleAdd}
        // onChange가 감지되면 (= 인풋에서 변화가 일어나면) setInput 함수 실행해. 그 이벤트가 일어난 요소의 값을 뜯어서 setInput(여기에 넣어라)
        placeholder="할 일을 입력해보자!"
      />
      <button className={style.btn} onClick={handleAdd}>
        <FaPlus />
      </button>
    </div>
  );
};

export default TodoInput;
