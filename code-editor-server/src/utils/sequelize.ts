import { Sequelize } from "sequelize";

console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_USERNAME: ${process.env.DB_USERNAME}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_PORT: ${process.env.DB_PORT}`);
console.log(`DB_NAME: ${process.env.DB_NAME}`);
console.log(`USE_SSL: ${process.env.USE_SSL}`);
console.log(`WHICH_ENV: ${process.env.WHICH_ENV}`);

const POSTGRES_URI = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log(`Connecting to ${POSTGRES_URI}`);
const useSSL = process.env.USE_SSL === "true";
console.log(`Using SSL: ${useSSL}`);

const dialectOptions = useSSL
  ? {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
  : {};

const sequelize = new Sequelize(POSTGRES_URI, {
  dialect: "postgres",
  dialectOptions,
  // logging: process.env.NODE_ENV !== 'test' ? console.log : false,
  logging: true,
});

export default sequelize;
