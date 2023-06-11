import Router from "express";
import {
  add,
  getAll,
  update,
  deleteCertificado,
} from "../controllers/certificados.controller.js";
import { authRequired } from "../utils/jwt.js";

const certificadosRoutes = Router();

certificadosRoutes.get("/getAll", getAll);
certificadosRoutes.post("/add", authRequired, add);
certificadosRoutes.put("/update", update); //reqs form query params
certificadosRoutes.delete(
  "/delete/:idToDelete",
  authRequired,
  deleteCertificado
); //reqs form params

export { certificadosRoutes };
