import Router from "express";
import { getAll, add } from "../controllers/infoPessoal.controller.js";

const infoPessoalRoutes = Router();

infoPessoalRoutes.get("/getAll", getAll);
infoPessoalRoutes.post("/add", add);

export { infoPessoalRoutes };
