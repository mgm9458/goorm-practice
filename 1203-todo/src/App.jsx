import { useState, useEffect } from "react";
import "./css/App.css";
import TodoInput from "./components/TodoInput";

export default function App() {
  // R 읽기 - 로컬스토리지에 저장되어있는 정보 읽어오기

  const [todos, setTodos] = useState(() => {
    // useState의 초기값은 함수이고 함수는 return으로 뱉고 이걸 todos와 setTodos로 구조분해할당할게

    const storedTodos = localStorage.getItem("todos");
    // 로컬스토리지에 todos라는 객체를 가져와서 storedTodos 변수에 할당
    // localStorage는 이름 고정임

    return storedTodos ? JSON.parse(storedTodos) : [];
    // (삼항 연산자) 로컬스토리지에 데이터가 없으면 빈 배열로 초기화
    // 이 반환되는 내용이 todos가 됨

    // storedTodos가 있다면? 그 애를 파싱해서 가져오고 그렇지 않다면 빈 배열로 반환해줘
    // 파싱이란 JSON = 문자열을 객체로 변환해 주는 과정(반대는 stringify)
    // 문서를 JSON에 담아서 보내야 컴퓨터가 읽을 수 있음
    // 기록물을 로컬스토리지로 보낸다
  });

  // 익명인 화살표 함수
  useEffect(() => {
    // useState에 쓰인 상태값 todos가 변경될 때마다 useEffect가 실행되어 로컬 스토리지 업데이트

    localStorage.setItem("todos", JSON.stringify(todos));
    // 로컬스토리지에 todos라는 객체를 찾아 todos로 들어온 값을 문자열 형태로 변환하여 저장
  }, [todos]);
  // 의존성 배열(dependencies)인 [todos]가 실행될 때마다 useEffect가 실행됨

  // C 생성하기 - todo 등록
  // @param {*} text todo의 내용
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    // setTodos는 todos의 기존 값들에 id, text, completed의 객체(키밸류값)을 감싼 객체 추가하여 배열로 나타낸 것
    // 기존의 todos 항목을 복제해오고, 그 뒤로 새로운 todo를 아이템으로 추가
    // 아이템 구성으로는 아래 3 프로퍼티로 구성해
    // id: 등록 시점을 밀리초로 변형한 숫자
    // text: 파라미터로 들어온 텍스트(할 일)
    // completed: 완료 여부 false(기본값)

    // ...todos는 기존 상태값(전개구문 복제)

    // Date.now -> date는 객체, 현재 시간 추출하는 내장 함수 now
    // 시간은 지나가면 다시 올 수 없는 고유한 값이라 id에 시간을 지정 많이 함
  };

  return (
    <>
      <h1>To-do List</h1>
      <TodoInput addTodo={addTodo} />
    </>
    // TodoInput 컴포넌트를 사용하기 위해 컴포넌트 폴더에 있는 TodoInput.jsx 파일을 import 한 것
  );
}
