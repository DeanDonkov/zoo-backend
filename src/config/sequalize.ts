import { DB } from "./config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(DB.SQL.DB_NAME, DB.SQL.USERNAME, DB.SQL.PASSWORD, {
  host: DB.SQL.HOST,
  dialect: 'mysql'
  // Additional options like pool configuration, if needed.
  // for the samples of demonstration pools seem to be redundant.
});

module.exports = sequelize;
