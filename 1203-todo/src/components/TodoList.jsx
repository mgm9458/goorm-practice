/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "../css/TodoList.module.css";

const TodoList = ({ todos, updateTodo, toggleComplete, deleteTodo }) => {
  return (
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
    // ul 태그는 정렬되지 않은 목록을 나타내며 보통 불릿으로 표현.
  );
};

export default TodoList;
