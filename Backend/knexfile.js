const config = require("./dist/config");

module.exports = {
  client: "mysql2",
  connection: config.default.database.connection,
  migrations: {
    directory: "./dist/migrations",
  },
  seeds: {
    directory: "./dist/seeds",
  },
};
