import "express-async-errors";
import express, { Request, Response } from "express";
import { BaseTodo, Todo } from "../models/Todo.interface";
import { create, find, findAll, remove, update } from "../services/Todo.service";

export const TODO_ROUTE = '/todos';
export const todoRouter = express.Router();

// GET todos
todoRouter.get("/", async (req: Request, res: Response) => {
  const todos: Todo[] = await findAll();
  res.status(200).send(todos);
});

// GET todos/:id
todoRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const todo: Todo = await find(id);

  if (todo) {
    return res.status(200).send(todo);
  }

  res.status(404).send("todo not found");
});

// POST todos
todoRouter.post("/", async (req: Request, res: Response) => {
  const todo: BaseTodo = req.body;
  console.log(todo)
  const newItem = await create(todo);

  res.status(201).json(newItem);
});

// PUT todos/:id
todoRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  const todoUpdate: Todo = req.body;

  const existingTodo: Todo = await find(id);

  if (existingTodo) {
    const updatedTodo = await update(id, todoUpdate);
    return res.status(200).json(updatedTodo);
  }

  const newItem = await create(todoUpdate);

  res.status(201).json(newItem);
});

// DELETE todos/:id
todoRouter.delete("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  await remove(id);

  res.sendStatus(204);
});
