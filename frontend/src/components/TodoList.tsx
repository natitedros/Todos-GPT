import React from "react";
import { Todo } from "../models/todo.model";
import SingleTodo from "./SingleTodo";
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
        <SingleTodo
          id={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
};

export default TodoList;
