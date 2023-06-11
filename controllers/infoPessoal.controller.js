import { infoPessoalModel } from "../models/infoPessoal.model.js";

export const getAll = async (req, res) => {
  const todos = await infoPessoalModel.findAll();
  return res.json(todos);
};

export const add = async (req, res) => {
  const { nome, email, cidade } = req.body;
  const perfil = await infoPessoalModel.create({
    nome: nome,
    email: email,
    cidade: cidade,
  });
  return res.send(perfil);
};
