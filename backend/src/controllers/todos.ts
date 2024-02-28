import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { title, description } = req.body as {
    title: string;
    description: string;
  };

  const newTodo = new Todo(Math.random().toString(), title, description);

  TODOS.push(newTodo);

  res.status(201).json({ message: "created todo", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedTitle = (req.body as { title: string; description: string })
    .title;
  const updatedDescription = (
    req.body as { title: string; description: string }
  ).description;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  TODOS[todoIndex] = new Todo(
    TODOS[todoIndex].id,
    updatedTitle,
    updatedDescription
  );

  res
    .status(201)
    .json({ message: "Todo Updated", updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  TODOS.splice(todoIndex, 1);

  res.status(201).json({ message: "Todo Deleted" });
};
