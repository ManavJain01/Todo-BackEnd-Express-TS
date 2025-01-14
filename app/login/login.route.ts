
import { Router } from "express";
// import { catchError } from "../common/middleware/cath-error.middleware";
import * as loginController from "./login.controller";
// import * as loginValidator from "./login.validation";

const router = Router();



router.post("/", loginController.getUserByLogin)

// router.patch("/:id", loginValidator.editUser, catchError, loginController.editUser)

export default router;

