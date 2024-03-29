import { RequestHandler } from "express";
import { Todo } from "../models/todo";
import OpenAI from "openai";

const TODOS: Todo[] = [
  new Todo(
    Math.random().toString(),
    "Finish Project",
    "You have to finish the project within this week. The display might not be as good, but just finish it. It is a simple one with a RAM as the database."
  ),
];

export const createTodo: RequestHandler = (req, res, next) => {
  const { title, description } = req.body as {
    title: string;
    description: string;
  };

  const newTodo = new Todo(Math.random().toString(), title, description);

  TODOS.push(newTodo);

  res.status(201).json({ todos: TODOS });
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
  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }
  TODOS[todoIndex] = new Todo(
    TODOS[todoIndex].id,
    updatedTitle,
    updatedDescription
  );

  res.status(201).json({ todos: TODOS });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  TODOS.splice(todoIndex, 1);

  res.status(201).json({ todos: TODOS });
};

export const autofillTodo: RequestHandler = (req, res, next) => {
  const promptTitle = (req.body as { title: string }).title;

  const prompt =
    "Can write a three sentence description about describing subtasks for title: " +
    promptTitle;

  let gptres;
  const runPrompt = async () => {
    const openai = new OpenAI({
      apiKey: process.env.GPT_AUTOFILLER,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 64,
      top_p: 1.0,
    });

    const output = response.choices[0].message.content;
    gptres = output;
    console.log(output);
  };
  runPrompt();
  res.status(201).json({ response: gptres });
};
