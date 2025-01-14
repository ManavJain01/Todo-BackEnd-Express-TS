import express from "express";

import { roleAuth } from "./common/middleware/role-auth.middleware"

// Routes
import userRoutes from "./user/user.route";
import loginRoutes from "./login/login.route";
import todoRoutes from "./todo/todo.route";

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsonFile from "../docs/swagger.json"

// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/todos", todoRoutes);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsonFile));

export default router;