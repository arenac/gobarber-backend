module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestaps: true,
    underscored: true,
    underscoredAll: true,
  },
};
