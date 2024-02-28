import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  autofillTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.post("/autofill", autofillTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
