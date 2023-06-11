import Sequelize from "sequelize";
import { database } from "../config/context/database.js";

const infoPessoalModel = database.define("infoPessoal", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING, //porque nao dei import em cima
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING, //porque nao dei import em cima
    allowNull: false,
    unique: false,
  },
  cidade: {
    type: Sequelize.STRING, //porque nao dei import em cima
    allowNull: false,
    unique: false,
  },
});
export { infoPessoalModel };
