const { Sequelize } = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize(
  "postgres://sijkmdlc:PL0G9AddcZVJOl8Fy713OmijU5uePraD@snuffleupagus.db.elephantsql.com/sijkmdlc", {
  define: {
    timetamps: true,
    underscored: true,
  },
  dialectModule: pg
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };
