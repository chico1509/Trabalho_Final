import Router from "express";
import { login, register } from "../controllers/user.controller.js";

const usersRoutes = Router();

usersRoutes.post("/login", login);
usersRoutes.post("/register", register);

export { usersRoutes };
