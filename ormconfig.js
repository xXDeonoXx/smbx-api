const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = [
  {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['**/*.entity{.ts,.js}'],

    migrationsTableName: 'migrations',

    migrations: [`src/database/migrations/*.ts`],
    cli: {
      migrationsDir: 'database/migrations',
    },
  },
];
