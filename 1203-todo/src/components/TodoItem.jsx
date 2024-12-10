/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../css/TodoItem.module.css";
// import cn from "classnames";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
// import { MdRadioButtonUnchecked } from "react-icons/md";
// import { FaRegCircleCheck } from "react-icons/fa6";

const TodoItem = ({ todo, updateTodo, toggleComplete, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  // 수정상태 여부를 초기값으로 상태에 설정
  const [editText, setEditText] = useState(todo.text);
  // 기존 todo에 기록된 텍스트를 초기값으로 상태에 설정

  // 할 일 수정 함수
  const handleEdit = () => {
    if (editing && editText.trim()) {
      // editing과 양 끝 공백을 제거한 editText가 있다면 App에 선언한 updateTodo(해당 id, 변경된 내용)를 실행해
      updateTodo(todo.id, editText);
    }
    setEditing(!editing);
    // 그렇지 않다면 수정상태를 반대로 돌려
  };

  // 엔터를 누르면 할 일 수정
  const editEnter = (e) => {
    if (e.keyCode === 229) return;
    // 맥에서 한글을 입력하는 동작(onKeyDown/Up)에서 함수 콜링이 두 번 중첩되는 이슈가 있어 해결책 삽입
    if (e.key === "Enter") handleEdit();
    // Enter를 누르면 업데이트
  };

  return (
    <li className={style.container}>
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`${style.iconCheck} ${
          todo.completed ? style.completed : style.notCompleted
        }`}
      >
        {todo.completed ? <IoCheckmarkCircle /> : <IoCheckmarkCircleOutline />}
      </span>

      {/* <div
        // className={cn("checkbox", { completed })}
        type={todo.completed}
        onClick={() => !todo.completed}
        onChange={() => toggleComplete(todo.id)}
      >
        {completed ? <FaRegCircleCheck /> : <MdRadioButtonUnchecked />}
      </div> */}

      {/* <input
        type="checkbox"
        checked={todo.completed} // 완료여부 업데이트 해(상태값 반영)
        onChange={() => toggleComplete(todo.id)} // 해당 함수로 변경된 값 업데이트해(상태값 반영)
      /> */}
      {/* 원본 */}

      {/* <div
        onClick={() => !todo.completed}
        onChange={() => toggleComplete(todo.id)}
      >
        {todo.completed ? <FaRegCircleCheck /> : <MdRadioButtonUnchecked />}
      </div> */}

      {/* // 수정 상태라면 input을 보여주고, 아니라면 span을 보여줘 */}
      {editing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={editEnter}
        />
      ) : (
        <span
          className={style.cancleLine}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {/* // 완료 여부 판단해서 true면 텍스트에 선 긋고, 아니면 제거 */}
          {todo.text}
        </span>
      )}

      {/* 수정 여부 버튼 - 수정 상태이면 해당 버튼에 '등록'으로, 아니라면 '수정'으로 써줘 */}
      <div className={style.btncontainer}>
        <button onClick={handleEdit} className={style.edit}>
          {editing ? <FaCheck /> : <FaRegEdit />}
        </button>
        {/* 온클릭이 되면 hadleEdit 함수 불러올거야 */}
        {/* 삭제버튼 */}
        <button onClick={() => deleteTodo(todo.id)} className={style.delete}>
          <RiDeleteBin6Line />
        </button>
        {/* 온클릭이 되면 deleteTodo 함수가 실행될거야 */}
      </div>
    </li>
  );
};

export default TodoItem;
