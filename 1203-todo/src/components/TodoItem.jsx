/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoItem = ({ todo, updateTodo, toggleComplete, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  // 수정상태 여부를 초기값으로 상태에 설정
  const [editText, setEditText] = useState(todo.text);
  // 기존 todo에 기록된 텍스트를 초기값으로 상태에 설정

  const handleEdit = () => {
    if (editing && editText.trim()) {
      // editing과 양 끝 공백을 제거한 editText가 있다면 App에 선언한 updateTodo(해당 id, 변경된 내용)를 실행해
      updateTodo(todo.id, editText);
    }
    setEditing(!editing);
    // 그렇지 않다면 수정상태를 반대로 돌려
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed} // 완료 여부 업데이트 해(상태값 반영)
        onChange={() => toggleComplete(todo.id)} // 해당 함수로 변경된 값 업데이트 해(상태값 반영)
      />

      {/* // 수정 상태라면 input을 보여주고, 아니라면 span을 보여줘 */}
      {editing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {/* // 완료 여부 판단해서 true면 텍스트에 선 긋고, 아니면 제거 */}
          {todo.text}
        </span>
      )}

      {/* 수정 여부 버튼 - 수정 상태이면 해당 버튼에 '등록'으로, 아니라면 '수정'으로 써줘 */}
      <button onClick={handleEdit}>{editing ? "등록" : "수정"}</button>
      {/* 온클릭이 되면 hadleEdit 함수 불러올거야 */}
      {/* 삭제버튼 */}
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      {/* 온클릭이 되면 deleteTodo 함수가 실행될거야 */}
    </li>
  );
};

export default TodoItem;