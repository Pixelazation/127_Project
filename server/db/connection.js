import { Sequelize } from 'sequelize';

// const db = new Sequelize('test_patient',
//                                 process.env.MYSQL_USER,
//                                 process.env.MYSQL_PASS, {
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
//   logging: console.log
// });

const uri = process.env.MYSQL_URI;

const db = new Sequelize(uri);

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default db;