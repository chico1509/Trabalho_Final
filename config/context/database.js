import Sequelize from "sequelize";

const database = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "pw",
  password: "pw",
  database: "trabalho_final",
  dialect: "mysql",
});

export { database };
