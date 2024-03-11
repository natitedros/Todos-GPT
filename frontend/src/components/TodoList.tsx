import React from "react";
import { Todo } from "../models/todo.model";
interface TodoListProps {
  todos: Todo[];
  title: string;
}

const TodoList: React.FunctionComponent<TodoListProps> = (props) => {
  const todos = props.todos;
  const title = props.title;
  return (
    <div>
      <h2>{title}</h2>
      {todos.map((todo) => (
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
