import { certificadosModel } from "../models/certificados.model.js";

export const getAll = async (req, res) => {
  const todos = await certificadosModel.findAll();
  return res.json(todos);
};

export const add = async (req, res) => {
  const { nome, descricao } = req.body;
  const certificadoCreated = await certificadosModel.create({
    certificadosNome: nome,
    certificadosDescricao: descricao,
  });
  return res.json(certificadoCreated);
};

export const update = async (req, res) => {
  const idRequest = req.query.idRequest;
  const { nome, descricao } = req.body;
  await certificadosModel.upsert({
    id: idRequest,
    certificadosNome: nome,
    certificadosDescricao: descricao,
  });
  return res.json({ api: "done" }); //res= resposta e o que e enviado
};

export const deleteCertificado = async (req, res) => {
  const iddelete = req.params.idToDelete;
  await certificadosModel.destroy({
    where: { id: iddelete },
  });
  return res.json({ api: "done" });
};
