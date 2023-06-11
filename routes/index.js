import Router from "express";
import { usersRoutes } from "./user.route.js";
import { certificadosRoutes } from "./certificados.route.js";
import { infoPessoalRoutes } from "./infoPessoal.route.js";

//TODO: ROUTES VÃO SER COLOCADOS AQUI!
//--ROUTES--//
const api = Router();

api.use("/user", usersRoutes); //done
api.use("/certificados", certificadosRoutes); //
api.use("/infoPessoal", infoPessoalRoutes); //done

export { api };
