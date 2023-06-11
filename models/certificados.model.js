import Sequelize from "sequelize";
import { database } from "../config/context/database.js";

const certificadosModel = database.define("certificados", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  certificadosNome: {
    type: Sequelize.STRING, //porque nao dei import em cima
    allowNull: false,
    unique: false,
  },
  certificadosDescricao: {
    type: Sequelize.STRING, //porque nao dei import em cima
    allowNull: false,
    unique: false,
  },
});
export { certificadosModel };
