/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import emptyBox from "../assets/Group 1.svg";
import styles from "../css/TodoList.module.css";

const TodoList = ({ todos, updateTodo, toggleComplete, deleteTodo }) => {
  return (
    <>
      {todos.length === 0 ? (
        <div className={styles.emptyState}>
          <img
            src={emptyBox}
            alt="할 일이 없습니다."
            className={styles.emptyImg}
          />
          <p className={styles.emptyText}>할 일이 없습니다. 추가해주세요!</p>
        </div>
      ) : (
        <ul className={styles.todolist}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </>
    // ul 태그는 정렬되지 않은 목록을 나타내며 보통 불릿으로 표현.
  );
};

export default TodoList;
