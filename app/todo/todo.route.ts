
import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as todoController from "./todo.controller";
import * as todoValidator from "./todo.validation";
import { roleAuth } from "../common/middleware/role-auth.middleware"
// import roleAuthMiddleware from "../common/middleware/role-auth.middleware"

const router = Router();

router
        // complete
        .get("/", todoController.getAllTodos)
        // complete
        .get("/:id", todoController.getTodoById)
        // complete
        .delete("/:id", todoController.deleteTodo)
        // complete
        .post("/", todoValidator.createTodo, catchError, todoController.createTodo)
        .put("/:id", todoValidator.updateTodo, catchError, todoController.updateTodo)
        .patch("/:id", todoValidator.editTodo, catchError, todoController.editTodo)

export default router;