
import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as todoController from "./todo.controller";
import * as todoValidator from "./todo.validation";

const router = Router();

router
        .get("/", todoController.getAllTodos)
        .get("/user", todoController.getTodoByUserId)
        .get("/:id", todoController.getTodoById)
        .delete("/:id", todoController.deleteTodo)
        .post("/", todoValidator.createTodo, catchError, todoController.createTodo)
        .put("/:id", todoValidator.updateTodo, catchError, todoController.updateTodo)
        .patch("/:id", todoValidator.editTodo, catchError, todoController.editTodo)

export default router;