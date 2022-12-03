import express from "express";
import {
  getAllTodo,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.route("/").get(getAllTodo).post(createTodo).delete(deleteAllTodo);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

export default router;
