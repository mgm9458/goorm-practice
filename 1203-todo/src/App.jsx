import { useState, useEffect } from "react";
import "./css/App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// 모듈 css를 가져오려면 객체에 싸매서 가져와야 함

export default function App() {
  // R 읽기 - 로컬스토리지에 저장되어있는 정보 읽어오기

  const [todos, setTodos] = useState(() => {
    // useState의 초기값은 함수이고 함수는 return으로 뱉고 이걸 todos와 setTodos로 구조분해할당할게

    const storedTodos = localStorage.getItem("todos");
    // 로컬스토리지에 todos라는 객체를 가져와서 storedTodos 변수에 할당
    // 객체 안에 있는 함수를 실행해서 ~~ getItem은 이미 만들어진거~
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

  /**
   * U 업데이트 - 변경된 텍스트 반영
   * @param {*} id todo의 고유값 - Data.now() - 인자
   * @param {*} updatedText 업데이트 반영할 텍스트 - 인자
   */

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    /**
     * todo라는 인자를 받음 그 todo는 todos 배열 안에 있는 하나의 객체. [{뭉땡이}, {뭉땡이}, ...] 여기서 {뭉땡이} 이거 하나를 의미함
     * todos를 map을 돌렸을 때, 하나의 객체 안에서 기존의 id랑 내가 수정할 것의 id가 일치한다면 ...todo로 객체 모든 속성 복사 후 text만 updatedText로 변경하고 그렇지 않다면 todo를 그대로 반환해
     * 기록되어있는 todos를 map으로 순회하고 각 할 일은 todo임
     * 삼항연산자 - 현재 순회 중인 todos에서 todo가 변경된 텍스트를 반영할 아이템이라면
     */
  };

  /**
   * U 업데이트 - 완료 여부를 토글하는 핸들러 함수
   * @param {*} id todo의 고유값
   */

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ) // 변경할 객체 value 값이 completed: true가 아닌 completed: !todo.completed로 작성한 이유는 true라고 작성하면 내가 이 토글을 눌렀을 때 상태가 무조건 true로 바뀌는데 토글을 끈 상태(false)도 있기때문에 너가 누른 상태에서 그걸 반전해! 때문에 부정 명령어를 작성한 것
    );
  };

  /**
   * D 삭제
   * @param {*} id todo의 고유값
   */

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // filter - 주어진 조건을 만족하는 요소들로만 새로운 배열을 생성
    // 삭제하려는 todo의 id가 파라미터로 들어가고
    // 그 id와 같지 않은 todo만 모아서 배열 생성해서 setTodos로 부모상태를 업데이트
    // => 그 id값을 가진 todo는 걸러
  };

  return (
    <>
      <h1 className="title">To-do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </>
    // TodoInput 컴포넌트를 사용하기 위해 컴포넌트 폴더에 있는 TodoInput.jsx 파일을 import 한 것
  );
}
