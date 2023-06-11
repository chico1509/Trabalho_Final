import Sequelize from "sequelize";
import { database } from "../config/context/database.js";

const UserModel = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING, //porque nao dei import em cima
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
export { UserModel };
